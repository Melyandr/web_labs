import React from "react";
import header_photo from "../../photos/3.jpg"
const Header = () => (
    <section>
        <div className="container3">
            <div>
                <img
                    src={header_photo} alt="pencilcase header" className="pencilcase_header_photo"
                />

            </div>
            <div className="header_text">
                <h1 className="title1">Why do we use pencilcase?</h1>
                <p className="p1">
                    Pencil cases keep your writing tools neatly organized and easily accessible.

                    They protect pens, pencils, and markers from damage and dirt.

                    Pencil cases are portable, making it simple to carry your supplies with you.

                    They come in a variety of styles, allowing you to express your personality.

                    Using a pencil case reduces the chances of losing or misplacing your writing tools.

                    In schools and offices, pencil cases help maintain order and promote better focus on tasks.
                </p>
            </div>
        </div>
    </section>
);

export default Header;
