import React, {
    useState,
    useCallback,
    FunctionComponent,
    ReactElement,
} from "react";
import { slide as Menu } from "react-burger-menu";
import OffcanvasNavigation from "../OffcanvasNavigation/OffcanvasNavigation";

const Offcanvas: FunctionComponent = (): ReactElement => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const closeMenu = useCallback(() => setOpenMenu(false), []);
    const handleStateChange = useCallback(
        (state: { isOpen: boolean }) => {
            setOpenMenu(state.isOpen);
        },
        [openMenu, setOpenMenu]
    );

    return (
        <Menu
            width={240}
            right
            isOpen={openMenu}
            onStateChange={handleStateChange}
        >
            <OffcanvasNavigation closeMenu={closeMenu} />
        </Menu>
    );
};

export default Offcanvas;
