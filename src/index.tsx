import { createRoot } from "react-dom/client";
import { OverlayScrollbars, ClickScrollPlugin } from "overlayscrollbars";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

OverlayScrollbars.plugin(ClickScrollPlugin);

createRoot(document.getElementById("root")!).render(
    <div style={{ height: "200px", width: "200px" }}>
        <OverlayScrollbarsComponent style={{ height: "100%" }} 
        							options={{ scrollbars: { clickScroll: true } }}>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
            <div>lorem ipsum</div>
        </OverlayScrollbarsComponent>
    </div>
);
