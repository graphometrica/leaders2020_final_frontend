export const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : {
  getItem: () => undefined,
  setItem: () => undefined,
};

export const getThemeMode = () => {
  if (typeof window !== 'undefined') {
    return window.sessionStorage.getItem('themeMode') || 'light';
  }

  return 'light';
}

export const isLightMode = () => getThemeMode() === 'light';
