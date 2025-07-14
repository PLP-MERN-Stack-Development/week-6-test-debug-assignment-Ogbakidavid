import { renderHook, act } from '@testing-library/react';
import useForm from '../../hooks/useForm';

describe('useForm Hook', () => {
  const initialValues = { username: '', email: '' };

  it('should initialize with correct values', () => {
    const { result } = renderHook(() => useForm(initialValues));
    expect(result.current.values).toEqual(initialValues);
  });

  it('should update field values', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    act(() => {
      result.current.handleChange({
        target: { name: 'username', value: 'testuser' }
      });
    });

    expect(result.current.values.username).toBe('testuser');
  });

  it('should reset form', () => {
    const { result } = renderHook(() => useForm(initialValues));
    
    act(() => {
      result.current.handleChange({
        target: { name: 'username', value: 'testuser' }
      });
      result.current.resetForm();
    });

    expect(result.current.values).toEqual(initialValues);
  });
});