import React, { Component } from 'react'

type AccountData = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    role: string,
    id: number
}

type PropsItems ={
    updateToken: (newToken: string, userRole: string) => void
    clearToken: () => void
    accountData: any
}


class AccountDetails extends Component<PropsItems, AccountData>{
    constructor(props: PropsItems){
        super(props);
            this.state = {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                role: '',
                id: 0,

        }
    }

    // componentDidMount(){
    //     this.accountMapper()
    // }

// accountMapper = () => {
//     return this.props.accountData.map((accounts:AccountData, index: number) => {
//         return(
//             <tr style={{border: '1px solid white', borderCollapse: 'collapse'}} key={index}>
//             <th scope='row'>{accounts.id}</th>
//                     <td>{accounts.firstName}</td>
//                     <td>{accounts.lastName}</td> 
//                     <td>{accounts.username}</td>
//                     <td>{accounts.password}</td>
//                     <td>{accounts.role}</td>
//             </tr>
//             )
//         })
//     }

    render(){
        console.log(this.props.accountData)
        return(
            <div style={{fontFamily: "Montserrat", textAlign: 'center', padding: '2%' }}>

            <h1 style={{marginRight: '0%', color: 'white', textDecoration: 'underline'}}>My Account Details</h1>
            <table style={{textAlign: 'center', justifyContent: 'center', width: '32vw', marginLeft: '3%', backgroundColor: '#183446', color: 'white'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid white', textAlign: 'center', }}>Account ID</th>
                    <th style={{border: '1px solid white', textAlign: 'center', }}>First Name</th>
                    <th style={{border: '1px solid white', textAlign: 'center', }}>Last Name</th>
                    <th style={{border: '1px solid white', textAlign: 'center', }}>Username</th>
                    <th style={{border: '1px solid white', textAlign: 'center', }}>Role</th>
                </tr>
                </thead>
                <tbody>
                {/* {this.accountMapper()} */}
                </tbody>
            </table>
        </div> 
        )
    }

}

export default AccountDetails;