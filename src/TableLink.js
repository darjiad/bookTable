import React from 'react'

// import Res from './Res';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import AllRes from './AllRes';
// import Details from './Details';
// import Menu2 from './Menu2';
// import BookTable2 from './BookTable2';
// import Honest from './Honest';
// import RK from './RK';
// import OverView from './OverView';
// // import Navigation from './Navigation';
// import LastPage from './LastPage';
// import LastPage2 from './LastPage2';
// import Coupons from './Coupons';
import TableAdmin from './TableAdmin';
import BookT from './BookT';
import Confirm from './Confirm';
import ReleaseTable from './ReleaseTable';
import Book_Reales from './Book_Reales';
import WaitingList from './WaitingList';

function TableLink() {
    return (
        <div>
      <Router>
      {/* <Navigation/> */}
        <Routes>
            {/* <Route path='/menu' element={<Menu2/>}></Route> */}
            {/* <Route path='/' element={<AllRes/>}></Route> */}
            {/* <Route path='/res' element={<Res/>}></Route> */}
            {/* <Route path='/honest' element={<Honest/>}></Route>
            <Route path='/rk' element={<RK/>}></Route>
            <Route path='/details' element={<Details/>}></Route>
            <Route path='/ov' element={<OverView/>}></Route>
            <Route path='/menu' element={<Menu2/>}></Route>
            <Route path='/booktable' element={<BookTable2/>}></Route>
            <Route path='/final' element={<LastPage/>}></Route>
            <Route path='/final1' element={<LastPage2/>}></Route>
            <Route path='/coupon' element={<Coupons/>}></Route> */}
            <Route path='/' element={<TableAdmin/>}></Route>
            <Route path='/bt2' element={<BookT/>}></Route>
            <Route path='/confirm' element={<Confirm/>}></Route>
            <Route path='/RealeseTable' element={<ReleaseTable/>}></Route>
            <Route path='/BookTableAdmin' element={<Book_Reales/>}></Route>
            <Route path='/WaitingList' element={<WaitingList/>}></Route>
            {/* <Route path='/bt2' element={<BookTable2/>}></Route> */}
            
        </Routes>
       </Router>
        </div>
      )
}

export default TableLink
