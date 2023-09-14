import { Box , Checkbox , FormControlLabel , Typography } from "@mui/material" ; 
import AddressForm from "./AddressForm.jsx";

const Shipping = ({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue
}) => {
  return (
    <Box m="30px auto">
        {/* BILLING FORM */}
        <Box>
            <Typography sx={{ mb: "15px" }} fontSize="18px">
            Billing Information
            </Typography>
            <AddressForm
            type="billingAddress"
            values={values.billingAddress}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            />
        </Box>

        <Box mb="20px">
                {/* <FormControlLabel
                control={
                    <Checkbox
                    defaultChecked
                    value={values.shippingAddress.isSameAddress}
                    onChange={() =>
                        setFieldValue(
                        "shippingAddress.isSameAddress",
                        !values.shippingAddress.isSameAddress
                        )
                    }
                    />
                }
                label="Same for Shipping Address"
                /> */}
                <FormControlLabel
                control={
                    <Checkbox
                    checked={values.shippingAddress.isSameAddress}
                    onChange={(event) =>
                        setFieldValue(
                        "shippingAddress.isSameAddress",
                        event.target.checked
                        )
                    }
                    />
                }
                label="Same for Shipping Address"
                />
        </Box>

        {/* SHIPPING FORM */}
        {!values.shippingAddress.isSameAddress && (
            <Box>
            <Typography sx={{ mb: "15px" }} fontSize="18px">
                Shipping Information
            </Typography>
            <AddressForm
                type="shippingAddress"
                values={values.shippingAddress}
                touched={touched}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
            />
            </Box>
        )}
    </Box>
  )
}

export default Shipping