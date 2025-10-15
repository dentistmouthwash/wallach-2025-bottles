import { Fragment } from "react";

export default function ListPage() {
  const DATA = [
    {
      name: "coca cola (200ml)",
      used: true,
      amt: 5,
    },
    {
      name: "pepsi (400ml)",
      used: true,
      amt: 5,
    },
    {
      name: "OJ (200ml)",
      used: true,
      amt: 5,
    },
    {
      name: "sprite (500ml)",
      used: false,
      amt: 2,
    },
    {
      name: "fanta (330ml)",
      used: true,
      amt: 7,
    },
    {
      name: "pepsi (1L)",
      used: false,
      amt: 1,
    },
    {
      name: "mountain dew (250ml)",
      used: true,
      amt: 3,
    },
    {
      name: "coca cola (500ml)",
      used: false,
      amt: 4,
    },
  ];

  return (
    <div class="bigList">
      <div class="grid-1">
        <div style={{
            gridColumn: "1 / span 3",
        }}>list</div>
        {DATA.map((item, index) => (
          <Fragment key={index}>
            <div>{item.name}</div>
            <div>-</div>
            <div>{item.amt}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
