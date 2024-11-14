export const getServices = async () => {
    const response = await fetch('http://localhost:3000/services/api/get-all');
    const services = response?.json()
    // console.log(services);
    return services;
}





export const getServicesDetails = async (id) => {
    try {
        const response = await fetch('http://localhost:3000/services/api/get-all'); // Fetch all services

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();


        const service = data?.response?.find((item) => item._id === id); // Filter by ID

        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    } catch (error) {
        console.error(error.message);
        return null; // Return null for handling
    }
};
