import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
		'a8cefe0928msh40ab1833a72889cp135ceejsn33ae227243df',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        
    },
};

export const fetchdatafromapi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};