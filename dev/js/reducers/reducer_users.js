export default function () {
  return (
    [
    {
      id: 1,
      name: "Johnny",
      desc: "Singer",
      age: 86,
      thumbnail: "http://image.ibb.co/m8JvYw/johnny_cash_9240610_1_402.jpg"
    },
    {
      id: 2,
      name: "Elvis",
      desc: "Rockstar",
      age: 75,
      thumbnail: "http://image.ibb.co/fa1hDw/220px_Elvis_Presley_promoting_Jailhouse_Rock.jpg"
    },
    {
      id: 3,
      name: "Marilyn",
      desc: "Supermodel",
      age: 72,
      thumbnail: "http://image.ibb.co/h7FymG/MV5_BNz_Qz_NDMx_Mj_Qx_NF5_BMl5_Ban_Bn_Xk_Ft_ZTYw_MTc5_NTI2_V1_UY317_CR7_0_214_317_AL.jpg" 
    }
  ]
)
} /*Remember that when any action happens to a reducer, that action is heard on every single reducer
because we have them all grouped together thanks to combineReducer*/
