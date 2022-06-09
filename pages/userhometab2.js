import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Userhometab2() {
  return (
    <ImageList
      sx={{ width: 685, height: 490, }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJjYWRlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    title: 'Arcade',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJjYWRlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    title: 'Arcade',
  },
  {
    img: 'https://images.unsplash.com/photo-1558271697-dd9f331ca8b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjYWRlJTIwZ2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'Arcade',
  },
  {
    img: 'https://www.neofuns.com/fronts/uploads/2019/08/amusement-arcade.jpg',
    title: 'Arcade',
    cols: 2,
  },
  {
    img: 'https://www.neofuns.com/fronts/uploads/2019/08/timezone-amusement-arcade.jpg',
    title: 'Arcade',
    cols: 2,
  },
  {
    img: 'https://www.neofuns.com/fronts/uploads/2019/08/timezone-amusement-arcade-1.jpg',
    title: 'Arcade',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.neofuns.com/fronts/uploads/2019/08/world-of-fun-amusement-arcade-1.jpg',
    title: 'Arcade',
  },
  {
    img: 'https://www.neofuns.com/fronts/uploads/2019/08/funtasia-amusement-arcade-1.jpg',
    title: 'Arcade',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR103dIsWVJiZ53R9bYDjlh_LsX8H2R1lG4ojjPV4dywdXMgmZrIcGrXf6grohYqO-n-ic&usqp=CAU',
    title: 'Arcade',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdD2ut2GhHETDfU5ZIbYBWmIVwlb3sxmCqY8nlWWzsmA2FjvMWfiCPuON9FvNg7NBrtlQ&usqp=CAU',
    title: 'Arcade',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-_vbhVGgHUqNkHcxsvkNISjLfIpXXIeilg&usqp=CAU',
    title: 'Arcade',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVLlD7OmrgdzcRVYxmVwQuXB-yIt8cZv7hvz7Ky3lxlKyfbz5uXLdh49JeiKYFnqnpcs&usqp=CAU',
    title: 'Arcade',
    cols: 2,
  },
];
