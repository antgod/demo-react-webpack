const fs = require('fs')

const a = fs.readFileSync('2.漫谈React.md', 'utf8')

const test = `<pre class="代码无行号 prettyprint"><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">class</span><span class="pln"> </span><span class="typ">NativeEventDemo</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  componentDidMount</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">.</span><span class="pln">button</span><span class="pun">.</span><span class="pln">addEventListener</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">,</span><span class="pln"> e </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleClick</span><span class="pun">(</span><span class="pln">e</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">});</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  handleClick</span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">e</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  componentWillUnmount</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">refs</span><span class="pun">.</span><span class="pln">button</span><span class="pun">.</span><span class="pln">removeEventListener</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
  
  
  
  

  render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln">button </span><span class="kwd">ref</span><span class="pun">=</span><span class="str">"button"</span><span class="pun">&gt;</span><span class="typ">Test</span><span class="pun">&lt;/</span><span class="pln">button</span><span class="pun">&gt;;</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span></code></pre>`


const b = a.replace(/pre[\s\S]*\>[\s\S]*\<\/pre/, function(word){
  console.log()
  return word.replace(/\n{2, }/g, '\n')
  replace(/\n+/g, '\n')
})

 console.log(b)
