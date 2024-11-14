export const getServices = async () => {
    const response = await fetch('http://localhost:3000/services/api/get-all');
    const services = response?.json()
    return services;
}



export const getServicesDetails = async ({id}) => {
    const response = await fetch(`http://localhost:3000/services/api/${id}`);
    const service = response?.json()
    return service;
}