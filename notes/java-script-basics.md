1.  async vs defer in script tag \n
    <script scr = "">
        IT will fetch the script from n/w and execcute then and their. At this point HTML parsing stopped, it will resume once script execution over.
    <script async scr = "">
        It will fetch script from n/w asynchronously along with the HTML parsing.HTML parsing block when script execution takes place.
