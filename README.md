# Pure JavaScript Table Search

A complete search in a table

## Example

```
<input id='search' type='text' onkeyup='searchTable("#search","#data","tr","td")'>
<table id='data'>
  <tr>
    <td>1</td>
    <td>Potato</td>
    <td>Brown</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Paprika</td>
    <td>Green</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Banana</td>
    <td>Yellow</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Apple</td>
    <td>Red</td>
  </tr>
</table>

<script src="tableSearch.js"></script>
```