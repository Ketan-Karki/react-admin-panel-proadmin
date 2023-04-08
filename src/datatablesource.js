export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div class="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div class={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/16197217/pexels-photo-16197217.jpeg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/15791536/pexels-photo-15791536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/16075136/pexels-photo-16075136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/15530666/pexels-photo-15530666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/14251082/pexels-photo-14251082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/11901011/pexels-photo-11901011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/10752105/pexels-photo-10752105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/16144214/pexels-photo-16144214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/16039744/pexels-photo-16039744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/10146128/pexels-photo-10146128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
