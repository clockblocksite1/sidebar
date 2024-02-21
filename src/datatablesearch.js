
export const userColums= [
    { field: 'id', headerName: 'ID', width: 70 },{
        field:"user", headerName:"User", width:230, rendarCell: (params)=>{
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        }
    },
    {
        field:"email", headerName:"Email", with:230
    },
    {
        field:"age", headerName:"Age", with:100
    },
    {
        field:"status", headerName:"Status", with:160, rendarCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
]
export const useRows = [
    {
        id:1,
        username:"Show",
        img:"The-Most-Essential-React-Interview-Questions.avif",
        status:"active",
        email:"1snow@email.com",
        age:35,
    },
    {
        id:2,
        username:"Jamile Lannister",
        img:"The-Most-Essential-React-Interview-Questions.avif",
        status:"passive",
        email:"2snow@email.com",
        age:42,
    },
    {
        id:3,
        username:" Lannister",
        img:"The-Most-Essential-React-Interview-Questions.avif",
        status:"pending",
        email:"3snow@email.com",
        age:45,
    },
    {
        id:4,
        username:" Stark",
        img:"The-Most-Essential-React-Interview-Questions.avif",
        status:"active",
        email:"4snow@email.com",
        age:16,
    },
    {
        id:5,
        username:" Targaryan",
        img:"The-Most-Essential-React-Interview-Questions.avif",
        status:"passive",
        email:"5snow@email.com",
        age:22,
    },
    {
        id:6,
        username:" Melisandre",
        img:"The-Most-Essential-React-Interview-Questions.avif",
        status:"active",
        email:"6snow@email.com",
        age:15,
    },
    {
        id:7,
        username:" Clifford",
        img:"The-Most-Essential-React-Interview-Questions.avif",
        status:"passive",
        email:"7snow@email.com",
        age:44,
    },
    {
        id:8,
        username:"Frances",
        img:"The-Most-Essential-React-Interview-Questions.avif",
        status:"active",
        email:"8snow@email.com",
        age:36,
    },
    {
        id:9,
        username:" Roxie",
        img:"The-Most-Essential-React-Interview-Questions.avif",
        status:"pending",
        email:"9snow@email.com",
        age:65,
    },
    {
        id:10,
        username:" Roxie",
        img:"The-Most-Essential-React-Interview-Questions.avif",
        status:"active",
        email:"snow@email.com",
        age:65,
    },
]