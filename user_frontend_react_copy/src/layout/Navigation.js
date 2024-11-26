import React from "react"
import { Link } from "react-router-dom"


export default function Navigation() {
    return(
    <div id="navigation">
        <p>
        <strong>메뉴</strong>
        </p>
        <ul>
        {/* 로그인전 */}
            <li>
                <Link to={"/user_login_form"}>로그인</Link>
            </li>
            <li>
                <Link to={"/user_write_form"}>회원가입</Link>
            </li>
        {/* 로그인후 */}
            <li>
                <Link to={"/user_view/guard1"}>guard1 님</Link>
            </li>
            <li>
                <Link to={"/user_view/guard1"}>내정보</Link>
            </li>
            <li>
                <Link to={""} onClick={""}>
                    로그아웃
                </Link>
            </li>
            <li>
                <a href="http://192.168.15.8:8080/swagger-ui/index.html">swagger</a>
            </li>
        </ul>
    </div>
    )
};
