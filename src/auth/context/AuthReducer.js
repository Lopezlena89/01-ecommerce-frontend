
export const AuthReducer = (state={},action) => {
    
    switch (action.type) {
        case '[TODO] Login':
            return{
                ...state,
                logged:true,
                user:action.payload
            }
        case '[TODO] Logout':
            return{
                logged:false
            }
        case '[TODO] Register':
            return{
                ...state,
                logged:true,
                user:action.payload
            }
        default:
           return state;
    }


}
