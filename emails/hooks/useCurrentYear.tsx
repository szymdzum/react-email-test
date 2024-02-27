const useCurrentYear = (): string => {
  const currentYear: number = new Date().getFullYear();
   const yearString: string = currentYear.toString();

  return yearString;
};

export default useCurrentYear;
