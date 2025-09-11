import React, {useState , useEffect} from "react"
import {
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {DataGrid} from "@mui/x-data-grid";
import {Button } from "@mui/material";
import { Link } from "react-router-dom";;
const AllOrders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  console.log("outisde useefec")
  useEffect(() => {
    // dispatch(getAllOrdersOfUser(user._id));
    dispatch({
      type: "setStaticOrders",
      payload: [{
        _id: "id_1",
        cart: [],
        totalPrice: "US$ " + 300,
        status: "Delivered",
      }]
    })
    console.log("useeffect inside")
  }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        console.log('parmas',params)
        return params.value === "Delivered"
          ? "text-[green]"
          : "text-[red]";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        console.log("renderCEll", params)
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];
  orders &&
    orders.forEach((item) => {
      console.log(item)
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "US$ " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

export default AllOrders