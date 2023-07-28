import { useLocation } from "react-router-dom"
import "./some-pages.scss"

export function SomePages() {
    const location = useLocation()

    const capitalizer = (pathname: string) => {
        return pathname
            .replace("/", '')
            .split('_')
            .map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
    }

    return (
        <div className="some-block">
            <h1>{capitalizer(location.pathname)} Page</h1>
        </div>
    )
}