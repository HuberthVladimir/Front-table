export const formDate = (date: string) => {
   const getDate = new Date(date)
   let day = getDate.getUTCDate().toString()

   if (Number(day) < 10) day = 0 + day
   const month = Number(getDate.getUTCMonth()) + 1
   const year = getDate.getUTCFullYear()

   return `${day}/${month}/${year}`
}

export const formatPhoneNumber = (str: string) => {
   let match = str.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);

   if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`
   };

   return null
};