export default function convertNumberToMoney(number: number) {
    const USAOptions = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', USAOptions);
    return numberFormat.format(number) 
}