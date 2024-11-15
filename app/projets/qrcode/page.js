import Main from "@/public/js/QrCodeMaker/Main.mjs";
export default function Qrcode() {
    new Main();
    return (
        <>
            <h1 class="text-center py-8 text-5xl underline-offset-1 text-purple-950">Qr Code Maker</h1>
            <div class="flex flex-row space-x-8 flex-wrap">
                <div id="containerForms" class="bg-blue-300 m-12 p-5 rounded-xl">
                    <h2 class="text-center py-8 text-3xl underline-offset-1 text-purple-950">Options</h2>
                    <div id="containerCodeType" class="m-4 p-3 bg-blue-600 text-blue-50 rounded-xl flex flex-col"></div>
                    <div id="optionsCodeType" class="m-4 p-3 bg-blue-600 text-blue-50 rounded-xl flex flex-col"></div>
                    <div id="defaultOptions" class="m-4 p-3 bg-blue-600 text-blue-50 rounded-xl flex flex-col"></div>
                    <div id="containerSubmit" class="flex justify-center"></div>
                </div>
                <div class="text-center bg-blue-300 m-12 p-5 rounded-xl flex flex-col items-center min-w h-fit">
                    <h2 class="text-center py-8 text-3xl underline-offset-1 text-purple-950">Output</h2>
                    <div id="output"></div>
                </div>
            </div>
        </>
    );
}
