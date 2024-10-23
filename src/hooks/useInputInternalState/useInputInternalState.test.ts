import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useInputInternalState, METHODS } from './useInputInternalState';

describe('hook', () => {
  describe('useInputInternalState', () => {
    it('idle', () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useInputInternalState({
          value: 5,
          onChange: fn,
        }),
      );

      expect(typeof result.current.handleChange).toBe('function');
      expect(typeof result.current.triggerOnChange).toBe('function');
      expect(result.current.status).toBe("base");
      expect(result.current.message).toBeNull();
      expect(result.current.innerValue).toBe(5);
    });

    it('handleChange with indirect method', () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useInputInternalState({
          value: 5,
          onChange: fn,
        }),
      );
      expect(result.current.innerValue).toBe(5);

      act(() => {
        result.current.handleChange(10);
      });
      expect(result.current.innerValue).toBe(10);
      act(() => {
        result.current.handleChange('test');
      });
      expect(result.current.innerValue).toBe('test');
    });

    it('reset indirect method', () => {
      let resetFn = null;
      const { result } = renderHook(() =>
        useInputInternalState({
          value: 5,
          onChange: (_nextValue, _prop, reset) => {
            resetFn = reset;
          },
        }),
      );
      expect(result.current.innerValue).toBe(5);
      act(() => {
        result.current.handleChange(10);
      });
      expect(result.current.innerValue).toBe(10);
      act(() => {
        result.current.triggerOnChange(15);
      });
      expect(result.current.innerValue).toBe(15);
      act(() => {
        resetFn();
      });
      expect(result.current.innerValue).toBe(5);
    });

    it('triggerOnChange with the same value', () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useInputInternalState({
          value: 5,
          onChange: fn,
        }),
      );
      expect(result.current.innerValue).toBe(5);
      act(() => {
        result.current.triggerOnChange(5);
      });
      expect(result.current.innerValue).toBe(5);
      expect(fn).toHaveBeenCalledTimes(0);
    });

    it('handleChange with direct method', () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useInputInternalState({
          value: 5,
          onChange: fn,
          method: METHODS.DIRECT,
        }),
      );
      expect(result.current.innerValue).toBe(5);

      act(() => {
        result.current.handleChange(10);
      });
      expect(result.current.innerValue).toBe(10);
      act(() => {
        result.current.handleChange('test');
      });
      expect(result.current.innerValue).toBe('test');
      expect(fn).toHaveBeenCalledWith(10, 'value', expect.anything());
    });

    it('triggerOnChange', () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useInputInternalState({
          value: 5,
          onChange: fn,
        }),
      );
      expect(result.current.innerValue).toBe(5);

      act(() => {
        result.current.handleChange(10);
      });
      expect(result.current.innerValue).toBe(10);
      act(() => {
        result.current.triggerOnChange();
      });
      expect(result.current.innerValue).toBe(10);
      expect(fn).toHaveBeenCalledWith(10, 'value', expect.anything());
      act(() => {
        result.current.triggerOnChange('test');
      });
      expect(result.current.innerValue).toBe('test');
      expect(fn).toHaveBeenCalledWith('test', 'value', expect.anything());
    });

    it('validation', () => {
      const fn = vi.fn();
      const { result } = renderHook(() =>
        useInputInternalState({
          value: undefined,
          onChange: fn,
          validate: (x) =>
            Number(x) <= 5
              ? { result: true }
              : { result: false, status: 'error', message: 'Error' },
        }),
      );
      expect(result.current.innerValue).toBeUndefined();

      // - change innerValue to 5
      // - check innerValue, status & message
      // - change to invalid innerValue 10
      // - check innerValue, status & message
      // - onBlur with invalid value
      // - check innerValue back to prev value, status to null and message
      // to null
      act(() => {
        result.current.handleChange(5);
      });
      expect(result.current.innerValue).toBe(5);
      expect(result.current.status).toBeNull();
      expect(result.current.message).toBeNull();
      act(() => {
        result.current.handleChange(10);
      });
      expect(result.current.innerValue).toBe(10);
      expect(result.current.status).toBe('error');
      expect(result.current.message).toBe('Error');
      expect(fn).toHaveBeenCalledTimes(0);
      act(() => {
        result.current.triggerOnChange(10);
      });
      expect(fn).toHaveBeenCalledTimes(0);
      expect(result.current.innerValue).toBeUndefined();
      expect(result.current.status).toBeNull();
      expect(result.current.message).toBeNull();
    });

    it('set value prop with focus and without focus', () => {
      const fn = vi.fn();
      const focusRef: React.MutableRefObject<boolean> = { current: false };
      // const { result: focusRef } = renderHook(() => useRef(false));
      const { result, rerender } = renderHook(
        (props) => useInputInternalState(props),
        {
          initialProps: {
            value: 'a',
            onChange: fn,
            focusRef,
          },
        },
      );
      expect(result.current.innerValue).toBe('a');

      // check the initial focusRef to false
      // - change innerValue
      // - update value prop
      // - check updated innerValue
      act(() => {
        result.current.handleChange('1');
      });
      rerender({ value: '2', onChange: fn, focusRef });
      expect(result.current.innerValue).toBe('2');

      // - change innerValue with focus
      // - change value prop
      // - check innverValue doesn't change
      // - trigger onChange with onKeyUp
      // - check the value and the onChange mock
      // - use onChange mock reset to back to prev setted value
      // - check innerValue is prev setted value
      focusRef.current = true;
      act(() => {
        result.current.handleChange('ab');
      });
      expect(result.current.innerValue).toBe('ab');
      expect(fn).toHaveBeenCalledTimes(0);
      rerender({ value: 'b', onChange: fn, focusRef });
      expect(result.current.innerValue).toBe('ab');
      act(() => {
        result.current.triggerOnChange('ab');
      });
      expect(result.current.innerValue).toBe('ab');
      expect(fn).toHaveBeenCalledWith('ab', 'value', expect.anything());

      // - onBlur same value
      // - check same value
      // - set value prop
      // - check innerValue has change to value prop
      focusRef.current = false;
      act(() => {
        result.current.triggerOnChange('b');
      });
      expect(result.current.innerValue).toBe('b');
      rerender({ value: 'c', onChange: fn, focusRef });
      expect(result.current.innerValue).toBe('c');
    });
  });
});
