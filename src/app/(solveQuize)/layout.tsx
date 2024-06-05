import EditorHeader from "../../components/layouts/header/editorHeader";
import EditorFooter from "../../components/layouts/footer/editorFooter";
import "../globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="JA">
            <body className="flex flex-col min-h-screen">
                <EditorHeader />
                {children}
                <EditorFooter />
            </body>
        </html>
    )
}
