import React from 'react'
// import './footer.css'
export const Footer = () => {
  let footerStyle = {
    poistion: "absolute",
    top:"100vh",
    width:"100%"
    }
    return (
        <footer className="bg-dark text-light mt-3 py-2" style={footerStyle} >
            <p className="text-center">
                Copyright &copy; MYTodosList.com (SACHIN)
            </p>

        </footer>
    )
}
