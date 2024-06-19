<!DOCTYPE html>
<html>
<body>

<h2>API উত্তর</h2>

<p id="demo"></p>

<script>
// আপনার API URL
var apiUrl = 'http://localhost:3000/api/your_prompt?api_key=AIzaSyB4X2HbcaBxnP8WdL7dlMVnFYM3Smyl7es';

// API কল করা
fetch(apiUrl)
  .then(response => response.text())
  .then(data => {
    // উত্তরটি ওয়েবসাইটে প্রদর্শন করা
    document.getElementById("demo").innerHTML = data;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
</script>

</body>
</html>
