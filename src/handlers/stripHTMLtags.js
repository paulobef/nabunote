export default function stripHTMLtags(string, element)
{
   if ((string===null) || (string==='')) {
       return false;
   } else {
    string = string.toString();
    const regex = new RegExp('<[^>]*' + element + '>', 'g')
    return string.replace(regex, '');
  }
}
