import * as React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@test';

import { Bool } from './Bool';

describe('types', () => {
  describe('Bool', () => {
    it('default', () => {
      render(<Bool />);
      expect(screen.getByText('test')).toBeInTheDocument();
    });
  });
});
