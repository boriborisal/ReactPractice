const user = {
  name: 'Blur',
  imageUrl: 'https://i.pinimg.com/736x/b5/2a/a8/b52aa815e38bc48f1ea4e378a978426e.jpg',
  imageSize: 90,
};



export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user. imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imagesize
        }}
      />
    </>
  );
}




// 얘 왜안됨 위에꺼
// import './App.css';
// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }


// export default function MyApp() {
//   return (
//   <div>
//     <h1>Welcome to my app</h1>
//     <MyButton />
//   </div>
//   );
// }

