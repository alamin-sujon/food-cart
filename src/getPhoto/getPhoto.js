import axios from "axios";

const getPhoto = async(photo) => {
console.log(photo)
const formData = new FormData()
formData.append('photo', photo);
const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData)
console.log(data);

};

export default getPhoto;