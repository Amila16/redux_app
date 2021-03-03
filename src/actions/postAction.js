import { FETCH_BUTTON_CLICKED } from "./types";

export const fetchPosts=()=>{
    return{
        type: FETCH_BUTTON_CLICKED,
        payload:[
        {
             userid:1,
             id:1,
             title:"sri lanka cricket"
         },
         {
            userid:1,
            id:2,
            title:"sri lanka football"
        }
        ]
    }
}