const initialState = {
    contacts: [
        {
            id: 1,
            name: 'Alice',
            phone: 123456,
            email: 'Alice@gmail.com',
        },

        {
            id: 2,
            name: 'Ian',
            phone: 1234567,
            email: 'gillan@gmail.com',
        },


        {
            id: 3,
            name: 'Michael',
            phone: 12345677,
            email: 'cretu@gmail.com',
        },

    ]
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CARD':
            return {...state, contacts: [...state.contacts, action.payload]}


        case 'DELETE_CONTACT':
            const newContacts = state.contacts.filter(el => el.id !== action.payload)
            return {...state, contacts: newContacts}

        case 'EDIT_CONTACT':
            const editContacts = state.contacts.map(el => el.id === action.payload.id ? {...action.payload}:el)
            return {...state,contacts: editContacts}
        default:
            return state;
    }

}
