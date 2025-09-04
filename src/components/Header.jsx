import { Link } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

const Header = (props) => {
  const navigate = useNavigate();
  const { current, title = "Welcome to My Store" } = props;
  const [cookies, setCookie, removeCookie] = useCookies(["currentuser"]);
  const { currentuser } = cookies;

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          borderBottom: "1px solid #ddd",
          mx: 7,
          py: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        {currentuser && (
          <Typography variant="body1" align="center">
            Current Logged In User: <br /> {currentuser.name} (
            {currentuser.email})
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            mt: 2,
          }}
        >
          <Button
            component={Link}
            to="/"
            color="primary"
            variant={current === "home" ? "contained" : "outlined"}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/cart"
            color="primary"
            variant={current === "cart" ? "contained" : "outlined"}
          >
            Cart
          </Button>
          <Button
            component={Link}
            to="/orders"
            variant={current === "orders" ? "contained" : "outlined"}
          >
            My Orders
          </Button>
          <Button
            component={Link}
            to="/categories"
            variant={current === "categories" ? "contained" : "outlined"}
          >
            Categories
          </Button>
          {currentuser ? (
            <Button
              variant="outlined"
              onClick={() => {
                // remove cookie
                removeCookie("currentuser");
                // redirect back to home page
                navigate("/");
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                variant={current === "login" ? "contained" : "outlined"}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                variant={current === "signup" ? "contained" : "outlined"}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
