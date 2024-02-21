import React, { useEffect } from 'react';
import logo from './assets/images/hay.jpg';

const App = () => {

  return (
    <div className="app-content">
      <header className="app-header">
        <a className="app-sidebar__toggle" href="#" data-toggle="sidebar"
          aria-label="Hide Sidebar"></a>
        <ul className="app-nav">
          <li><a className="app-nav__item" href="/cpanel/admin/login"><i className='bx bx-log-out bx-rotate-180'></i> </a>
          </li>
        </ul>
      </header>
      <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside className="app-sidebar">
        <div className="app-sidebar__user"> <img className="app-sidebar__user-avatar" src={logo} width={50} 
          alt="User Image" />
          <div>
            <p className="app-sidebar__user-name"><b>Xuân Hoàng</b></p>
            <p className="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
          </div>
        </div>
        <hr />
        <ul className="app-menu">
          <li><a className="app-menu__item active" href="/cpanel/admin/HomePage"><i
            className='app-menu__icon bx bx-tachometer'></i><span className="app-menu__label">Bảng điều
              khiển</span></a></li>
          <li><a className="app-menu__item " href="/cpanel/admin/Customer"><i className='app-menu__icon bx bx-id-card'></i>
            <span className="app-menu__label">Quản lý nhân viên</span></a></li>
          <li><a className="app-menu__item" href="/cpanel/admin/Product"><i
            className='app-menu__icon bx bx-purchase-tag-alt'></i><span className="app-menu__label">Quản lý sản
              phẩm</span></a>
          </li>
          <li><a className="app-menu__item" href="/cpanel/admin/Category"><i
            className='app-menu__icon bx bx-user-voice'></i><span className="app-menu__label">Quản lý danh
              mục</span></a></li>
          <li><a className="app-menu__item" href="/cpanel/admin/Order"><i className='app-menu__icon bx bx-task'></i><span
            className="app-menu__label">Quản lý đơn hàng</span></a></li>
          <li><a className="app-menu__item" href="/cpanel/admin/discounts"><i className='app-menu__icon bx bx-task'></i><span
            className="app-menu__label">Quản lý mã giảm giá</span></a></li>
          <li><a className="app-menu__item" href="/cpanel/admin/Internal"><i className='app-menu__icon bx bx-run'></i><span
            className="app-menu__label">Quản lý nội bộ
          </span></a></li>
          <li><a className="app-menu__item" href="/cpanel/admin/Statement"><i
            className='app-menu__icon bx bx-dollar'></i><span className="app-menu__label">Bảng kê lương</span></a>
          </li>
          <li><a className="app-menu__item" href="/cpanel/admin/Revenue"><i
            className='app-menu__icon bx bx-pie-chart-alt-2'></i><span className="app-menu__label">Báo cáo doanh
              thu</span></a>
          </li>
          <li><a className="app-menu__item" href="#"><i className='app-menu__icon bx bx-cog'></i><span
            className="app-menu__label">Cài
            đặt hệ thống</span></a></li>
        </ul>
      </aside>
      <main className="app-content">
        {/* ... */}
        {/* Nội dung trang chủ và các thành phần khác */}
        {/* ... */}
        <div className="row">
          {/*Left*/}
          {/* ... */}
        </div>
        <div className="text-center" style={{ fontSize: "13px" }}>
          <p><b>Copyright
            <script type="text/javascript">
              document.write(new Date().getFullYear());
            </script> Phần mềm quản lý bán hàng | Dev By Trường
          </b></p>
        </div>
      </main>
    </div>
  );
};

export default App;
