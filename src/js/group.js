import React from "react";

export const Group = () => {
    return (
        <div class="col-12">
            <div class="row">
                <div class="col-3">
                </div>
                <div class="col-6">
                    <div class="header-wrap">
                        <h1 class="main-header">[SDCS] Group Generator</h1>
                        <hr />
                        <p>Sponsored by: Michael Roberts Jr. and his students</p>
                        <h6>Sign up and...</h6>
                        <h3 class="sub-header">"Git your Mob On!"</h3>
					</div>
				</div>
                <div class="col-3">
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="form-wrapper">
                        <div class="name-label" type="label" for="name">Full Name</div>
                        <input type="text" id="name" placeholder="i.e., John Doe" maxlength="50" />
                        <div class="skill-label" type="label" for="skill-level">Skill Level (weeks in program)</div>
                        <input type="number" id="skill-level" placeholder="i.e., 7" min="1" max="16" />
                        <div class="button-wrap">
                            <button id="submit" type="submit" class="btn btn-primary" onclick="studentClick(event)">Initiate</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <br />
                    <img src="https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/Reservoir-Dogs-Fresh-New-Hd-Wallpaper.jpg?itok=iAQjj4nB" class="mob-image">
			    </div>
            </div>
        </div>
    )
}
