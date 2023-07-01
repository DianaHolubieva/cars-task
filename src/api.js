export const fetchCars = async () => {
    try {
        const response = await fetch('https://myfakeapi.com/api/cars/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};