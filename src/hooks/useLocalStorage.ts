const useLocalStorage = () => {

    const setLocalItem = <T>(newKey: string, newValue: T) => {
        const valueStringified = JSON.stringify(newValue)
        if (newKey && valueStringified) {
            localStorage.setItem(newKey, valueStringified)
        } else {
            console.error(`Either the key or the value is null!`)
        }
    }

    const getLocalItem = (keyExistingInLocal: string) => {
        if (typeof window !== "undefined") {
            const itemStringified = localStorage.getItem(keyExistingInLocal)

            if (itemStringified) {
                return JSON.parse(itemStringified)
            }
        }
    }


    return { setLocalItem, getLocalItem }
}

export default useLocalStorage