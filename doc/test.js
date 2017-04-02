const fs = require('fs')

const a = fs.readFileSync('2.漫谈React.md', 'utf8')

const test = `<pre class="代码无行号 prettyprint"><code><span class="pln">componentDidMount</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  document</span><span class="pun">.</span><span class="pln">body</span><span class="pun">.</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">,</span><span class="pln"> e </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
      active</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span><span class="pln">
    </span><span class="pun">});</span><span class="pln">
  </span><span class="pun">});</span><span class="pln">
　
  document</span><span class="pun">.</span><span class="pln">querySelector</span><span class="pun">(</span><span class="str">'.code'</span><span class="pun">).</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">,</span><span class="pln"> e </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    e</span><span class="pun">.</span><span class="pln">stopPropagation</span><span class="pun">();</span><span class="pln">
  </span><span class="pun">})</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

componentWillUnmount</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  document</span><span class="pun">.</span><span class="pln">body</span><span class="pun">.</span><span class="pln">removeEventListener</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">);</span><span class="pln">
  document</span><span class="pun">.</span><span class="pln">querySelector</span><span class="pun">(</span><span class="str">'.qr'</span><span class="pun">).</span><span class="pln">removeEventListener</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>`


const b = a.replace(/pre[\s\S]*\>[\s\S]*\<\/pre/, function(word){
  // console.log(word)
  return word.replace(/\n{2, }/g, '\n')
})

console.log(b)
