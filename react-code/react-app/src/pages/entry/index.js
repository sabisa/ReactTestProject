import { Outlet, useLocation } from 'react-router-dom'
import Header from '@/components/header'
import { useSelector } from 'react-redux'
import { ConfigProvider, theme } from 'antd'
import { PrivateRoute } from '@/router'
import './entry.styl'

const { darkAlgorithm, defaultAlgorithm } = theme

function Entry() {
    const location = useLocation()

    const globalTheme = useSelector((state) => state.theme)

    let antdTheme = {
        algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm
    }

    if (globalTheme.colorPrimary) {
            antdTheme.token = {
                colorPrimary: globalTheme.colorPrimary,
            }
    }
        
    return (
        <PrivateRoute>
            <ConfigProvider theme={antdTheme}>
                <div className="M-entry">
                    <Header title={location.pathname}/>
                    <div className="main-container">
                        <Outlet />
                    </div>
                </div>
            </ConfigProvider>
        </PrivateRoute>
    )
}

export default Entry
