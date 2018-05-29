
var body = document.body
var tip
var timeout
var time = 3000
var setStyleTime = 50
function Tip (str, time) {
  if (tip) {
    clearTimeout(timeout)
    // tip.find('p').html(str);
  } else {
    tip = document.createElement('div')
    tip.className = '__toast'
    tip.innerHTML = str
    // tip.style.cssText = 'z-index: 999;position: fixed;webkit-transition: opacity .3s ease;transition: opacity .3s ease;opacity: 0;color: #fff;border-radius: 8px;left: 50%;width: 80%;margin-left: -40%; /*px*/text-align: center;line-height: 1.5;background: rgba(0,0,0,.6);padding: 1% 1%;top: 45%;box-sizing: border-box;font-size: 1.5em;';
    body.appendChild(tip)
    setTimeout(function () {
      tip.style.opacity = 1
    }, setStyleTime)
  }
  timeout = clear(time)
}

function clear (time) {
  return setTimeout(remove, time)
}

function remove () {
  if (tip) {
    body.removeChild(tip)
    tip = null
  }
}

function entry (msg, expire) {
  msg = msg || ''
  if (!expire || expire <= setStyleTime) {
    expire = time
  }

  Tip(msg, expire)
};

export default entry
