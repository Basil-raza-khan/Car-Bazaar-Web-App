import axios from "axios";

const FormatResult = (resp) => {
    let result = {};
    let finalResult = [];

    resp.forEach((item) => {
        const listingId = item.carlisting?.id; // Use 'carlisting' instead of 'carLisiting'
        if (!result[listingId]) {
            result[listingId] = {
                car: item.carlisting, // Use 'carlisting' instead of 'carLisiting'
                images: []
            };
        }

        if (item.carImages) {
            result[listingId].images.push(item.carImages);
        }
    });

    // console.log('Intermediate result:', result); // Log the intermediate result

    for (let key in result) {
        finalResult.push({
            ...result[key].car,
            images: result[key].images
        });
    }

    // console.log('Final formatted result:', finalResult); // Log the final formatted result

    return finalResult;
};

const SendBirdId = import.meta.env.VITE_SENDBIRD_APP_ID;
const SendBirdApiToken = import.meta.env.VITE_SENDBIRD_API_TOKEN;

const CreateSendBirdUser = (userId ,nickName,profileUrl)=>{
    return axios.post('https://api-'+SendBirdId+'.sendbird.com/v3/users',{
        user_id:userId,
        nickname:nickName,
        profile_url:profileUrl,
        issue_access_token:false
    },{
        headers:{
            'Content-Type':'application/json',
            'Api-Token':SendBirdApiToken
        }
    });
}

const CreateSendBirdChannel = (users,title)=>{
    return axios.post('https://api-'+SendBirdId+'.sendbird.com/v3/group_channels',{
        user_ids:users,
        is_distinct:true,
        name:title,

    },{
        headers:{
            'Content-Type':'application/json',
            'Api-Token':SendBirdApiToken
        } 
    });

}



export default{
    FormatResult,
    CreateSendBirdUser,
    CreateSendBirdChannel
}