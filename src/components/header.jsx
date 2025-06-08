// =============================================
// ===== Modules =====
import * as button from './buttons'

// ===== Scripts =====
import * as scripts from './../scripts/script'

// ===== Images =====
import logo from './../assets/icons/logo_white.png';
import code from './../assets/icons/code.png';
import info from './../assets/icons/info.png';
import notes from './../assets/icons/notes.png';

export function Header() {
    return (
        <header>

            <img src={logo} />
            <label className='slash'>/</label>
            <label className='name'>Code-View</label>

            {/* Toggle */}
            <div className="toggle">
                <div className="selected-button"></div>
                <button.icon_button icon={code} text="Code" onClick={scripts.toggle} />
                <button.icon_button icon={info} text="Info" onClick={scripts.toggle} />
            </div>

            {/* Get project */}
            <button.blue_button icon={logo} text="Export project" />

        </header>
    );
}
