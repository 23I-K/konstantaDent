// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Aestetic4SvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      viewBox={"0 0 173 173"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <image
        width={"173"}
        height={"173"}
        xlinkHref={
          "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACtCAYAAADCr/9DAAAb6ElEQVR4nO2dCXwU9dnHf7nvg4SwBEIgnBsCw6kgoqyCoiLvKJ4tPV7t69FD21pfqVYd562t1U9brfrWvlZ7qNW2IjCKovXAUG6QY5IAC0lIwpEsue97836eyQQ2yWzYY3Z3Zne+n89+INndmWf+8+Q/z/95nv/zhMFgRBiWiwKQA2AygEkOr3QAo+UX/T/OhZGsA1Dr8G8lgDL5VUovUeCrjDsyMobSOsCwXCKARQDm048AZgOYCSDKj2KQQosOr90AjooCb/ejDJompJWWYblUAMsBLANwOYA5ACI0INpQGgDsArAdwFYAe0WB79WWiP4j5JSWYbl5AK4HcB2AJRpV0otBs/G/AGwBsFkU+Dpti6suIaG0DMvRY/52ALcBmKEBkdSkB8DnAN4FsDEUFDholZZhOVogfQPAPbJdGgqQAm8G8EcAHwerHRx0SsuwnAXAvQBuARCtAZECxWkArwN4VRT4s8F0YUGhtAzLRcqP/4cALNCASFqiG8DbAH4jCnxBMFyQrpWWYTmaSb8rK2u2BkTSOrR4e0oU+F16vghdKq2srHcDeAzABA2IpDc+AfCkKPB79Si8rpSWYTmS9w4Av5SjVAbesQnAOlHgj+tpHHWjtAzLLQTwghwEMFAPsnl/B+BpUeAb9TCumldahuUorv+sbA4YYWffUU2zLoC/iALfp2VBNa0EDMvdKc8CYzQgTqhAgYp7RYEv1er1alJpGZYbD+APAG7UgDihSDst1AD8VosBCs0pLcNya+SITpoGxAl1vgTwLVHgT2lpHDSjtHJaIC20vqMBcQwuQBlm94kC/0+tjIkmlJZhOcoNeA+AWQPiGCjzfwAeFAW+K9DjE3ClZVjuVgB/BpAYaFkMLgoFI24RBf50IIcqYErLsFyEHCR4JFAyGHjEOcrzEAU+P1DDFxClZVguHsDfANwUiPMbeA0FJO4WBf6tQAyl35WWYTkTgA8AXOLvcxuozpNyJM2vwQi/bjVhWG4qgG0A8vx5XgOfcRWAiSazZbPNmu83xfWb0spbXj4zUgiDjrm0hclktrxvs+b7ZbOlX8wDhuXmy+lwo/1xPoOAQCbfbaLAd/r65D5XWjk7i+LZyb4+l0HAoSfpKl/7csN9eXDZJNhiKGzIsALAenn7k8/wmU0rL7q+AGAK9TsZYtAW/akms0Xw1eLMJzMtw3KZskmQ6YvjG2ierwN42VdCqj7TMiyXAOBTI48g5FloMlvabNb8nWoPhKpKK4dm18u1sQwMrjGZLUU2a/4RNUdCbfPg10bitsEQ3mRYTtXop2ouL4bl1gIISCzaQPNQEvkCUeCr1RBUFaVlWI6RS1HGq3E8g6CEPEnXqlGi1GvzgGG5FAAbDIU1uAhXA/iFGoOkhk37CoApKhzHIPhZx7DcCm+v0ivzwLBjDTyAKjgyosDXejp4Hs+0DMtRs4zfG3fNwE3GAXjNm0HzyE8r19TaYAQQDDzEbDJbSm3WfNGTr3s6094tJwAbGHjKbxmWy/CL0jIsN5YK9Bq3ysBLKLf6eU8O4clM+yKAFOOOGajAWoblVrp7GLe8B3I/g63G3TJQESs1GRQFvtvVQ7o80zIsFy6XLTIwUBPKv/2+O8dzxzy4R+5oaGCgNpzcQks9pZWLwz1l3CoDH0HtXh939dCuzrQ/ADDWuGMGPuQ+huVcavpyUaWVZ9mHjbtl4GNiAfzMlVO4MtP+BEC6cccM/MDdDMtdtJjLiEorF4p70LhbBn4iypUqmhebae8yysgb+Jm75I5GTnFaVEH2y/44FO9YanI8VizOxdzcbGSPS0NKYhxioiPR02tHW3sXbLVNKC4/h70FJ7GvoAw9vb4vYRUWFobZ08djETMZuZMzkTkmBQlxMYiOikB3jx1NLe2orG6EaD2Nz3cfxRlbvc9l8hHxcuvYp52OhbM35IYd7+noYr3GlJ6M76+9GquWzUZkhGsJcA3Nbdjw6QG8sWkX6ptaVZcpNiYKt167AGtXL8a4MeQZco0dB4rxuzc/g/Vkleoy+QEbVWN0VhfM6Z0xmS2UYzBZj1fsCdddMQt/eOqbmD1tPMLDXY+5kFLNy83GbSsXorm1E0dKKlWT6fL5U/EK902sXDoLSQmxbn03OzMNt6xcIM3QB45UoK9P0/3shkIeK9p6Xqj0pqLSMiw3WQ7ZhkSHxLtvWYrH778RUZGel4GIjorElQunY+rEMdi2/7hkSngKKdoD31iOJ7672m1ldYSOc8msSZICb91j1Zviptms+W8ovaF4l0xmC7m5rvS5WBqAvXouHr33BtUEmTwhQ1IUsiu7unvc/n5ERDie+gGLr69apJpM0yaakBQfgx0Hi1U7ph/IMZktb9ms+cOM82FKK1eJeRNAkp6u0BOyTKPw8hNrEenFDKvE2IwUrLgsF4eOnUJNfYvL3yOb+oVH78TVi9TfEMLMyELh8TOoqKxT/dg+pMVmzf9i6OGH3S2T2XK1u1k3euWx+1dJK3FfkJIUjzXXzMeY9GRUnK2TFmzOSE9NxF03X45nHroFE8f5Lo5D17r+X1/pyUwYbzJbXrJZBzfSUXJ53eY3kQLIhLFpuG7pLJ8KQAs6WvnT61hppbQgKj9bi/aOLsl+zspMk9xY82dORHiY75cPZLosu2QGvth91OfnUglaW5GdtNvxcIOUlmE5ikis0csVecMdN1wiLVT8hXlypvQKNGtvXKQnpYU8iQ5S2qG+HTINPNpspicoUHDT8nnBfpmKLJw1CTlZump9MezJP1RpV/lPlsBBj0hvXEl6Z7VFV7n8E+RacecZqrTX+V8m/7NqGaM1kfzKDctm+9U0UoHrHQ9xXmnlgMI0PV2JJ8THRkuRplAmMyMVeVPH6WkElJV26BvBymXzpngV+QoWyETSEZczLHe+Q5Kj0oZEyXmd3SyfseyS6XoSl7xcSwZ+cFTapYGRx328mSkpxGoATJ9kklIudcTlA6JKSsuwXI5e2ieRu+o3D7O4//YlcHctQWFSd9L7ghlaiM0xu7SPUCsMVlrHqVfLhIeH4Wf3rMDMKSbces0cPH7vtYiMdD2NUGc3yedQSqWOWDTQCXLgjqvafcRXPPD1K7Bkbs75oy9bOAXP/Xg1EuKiXTqjr/IM9MqMHF1VBaAdDblwUFrNOy6/dsN8rF6WN+z3zPRxePbh/0B21sUTTXR2k3yODsdD0lNdKO01l83Ad25Wzi/t6O7F8cY23MheCmZm1ojHmTje2AnvyOhRidI+Mx3Rr7RyH1vN3s2FeRPwk29bFN/r7rXjyxOVaO3sQWdPLy5bNgtXLFZ25VBydeZoo0LpULLGjtKWQCNDXe0l/9dMrUo4ZcJoPHn/SkRGDF9s2fv6sL3Ehvq2C3vfeux2mOfmYFRqAt7/+OCgz49JS5YUVw167X04UVWDuuY2JMbGYMa40YiJ8l23eDrf8coa1Le0ITEuBjMy1TsfeVN0tPlR0lW68pyLf9b3kPdqSU4aZmUm4UxjBw6d68AzP1yF+NgoxXPvK69GVdPwxGpS5qnm8bgdffjnx4fO/z49NUGVa+js7sGGvUWodth5u6f4FNZcmof0JPVbqXV09+C9PYWodUgi3yudbxbSVPCzpqeoMy5+Ios8CKS0mvC237tkEm6dc2F1f8Ye6VRhxTN1KK1pVnwvLjoSlmmZiM+bgDGjEvH7f+yA3d6HVJUUatfxikEKS7R3dePTgmLcuUT9pcEOa/kghSXaOrvxeWExbls82+vjU40HHUFRpexwLShtSlwUbmEGu6PGh/egtdCKpub2Qb8vrm5CUaVyIYqoiHBcRQob3f/ovOnq2XjyvmulR6laqYgnq5XPfa6xRVJetSk7p3y+yvpmadb3Fh2maE4K14J5kBwTqRjdSgvrQfiJYpyraZJ+PtPYhv3lyj2BabvKFVPHImWIz3bp/Ml47qHVSE5U5+aE+XlX/UhRPzXSC3WYPDQxXO4yElBON7bjdEOHoggJ6EVKRRmOldmwo6QKzrbkLc4ZA1OSso0Xl5qAsVMz0NDifHOhq0w2Ka+2M1OTEBetbM54db4xyqXUxqclI1oFhVNrcepHxoRrwd1Fm0P5T6yobulSfD8adkyptyHZyQDPy0rHxLRExfcqG9uwt/wcWrp68O7uAlTVN3kl6+Jp2ZKCOpIYG40VjG9ydC+bno0xKYOvLSkuBstnq3O+Xi+KigSI9AiT2fKsFiRpaO/GttJazM9Kxaj44TNWOPowBZ2ojoxFq/3CfDt9TAqY8cqzUV1bJ/JPVEkeBUgusX7XUVpCLNISPVuARISHIzdrDDKSE5GeGC/9/6q8yUiIcS2U7C7k7ps55HyWvBzVzldw/LTeingc09SzgWbaH28qxOGzyrNhWF8fru5txISIfiWcMCoB8ycoWzctnd3IP14p+W4doYDElkMnYGvwfMYl+3mKKQ2XTs1C7vgMRLlYrE6L52tpU6zxpmUyNGfQtHb14qcfHMHW4hqnn7m8rwW54T24NDtDcaFC0TGKlHX0KJfgnDE2DabUZMX3Qg0dKm2KJq1weow/8+kJvHvorNPPzEE7agqsaO8Y7Gai6NG24io0dyi7n7LTk7Bijq6y9n1KbYPrZZu0gmaXjmQAvLqrHL/fUQZnVXwy0YX2I1Y0yJEx+tzOUhtqWpQ9ERlJcVg1f6bedqIqQma9GtWN6hrVr6nrY5J8FzBXiY1iJWpbu7Bu+VREK3gPRqEHbSUlsGVlo6KtC6cblG9CXGQErpk9LSg2NZKyDqxFI738+ztdpbuK4fpw0m0rqcW6D46gpVM5AhTf14uU0+U416jshyVl/2jzflQ7Cf3qDbXKx1HZ/bPVDbq7ft14lgsrm/HDjYU416K8cIjps2OlvRFpUYNn0ojwMOzedhSl5dUoO+t8cReKUNlPHfpp9aO0REV9Ox7cUIiSGmUTIMJuxzW9DTDJz0yyXYsLK3CwsFz6+Vhp4FLwepqb0X7qFDqrq9FdX4+umhp0nDmDrtragMkUyPHwgm7N27RDIfv2IaEIT66cgQVZw5O6SV2vsjdhZ0QiCk7V4Yt/X6gQSI70QNF85Ai6G4Y/isMiIpCxYoVbUg0swLxdThadOBOw8fCCVt0Fnom2rl48/uFRfHZcOXmGWNLXgiUR7UiMufB3ebSkEnZ7YB6HMSaTW78fifM2rZdaKwbwj9gbdKm0kH25z31ejHcOOJ8tZmcm44WbZyEjsT/k2dbRBfF4YGaX+EmTkJSXh4j4/vBxeHQ0EqZMQfIs9ws7D3jsvLl5rW2dKCp27gfXMLU0Ddn1qrw04/xpTwWqWzrxwBWTFaNjE0fF4aU1s/HYh8dQWtuKPYdLMTdA9Q/isrKkV5/djjA32j4NJSLM+1l2X2GZLhdhpLQ0coFbCajEB0U2KUuss0f5JqQnROP5m/IwLysF2w+cCLi83iis3cFH6w1aGAcPqQsKpSV2nKzDI+8fQWOHE19udAR+uSoXGX2dqKpp9Lt8ajCgsFI0zIvjUdbb57t0VcLeEWmmtWlHHu84YmvGjzYWoKpJ2ZcbGR6Gny6fiuI9B9U7qR9xDNt6Yx0cKCrXY/h2gCpS2jJtyKIOtAPiwQ0FOFHt/KZMj+xE89Gj6gTv/cj5BZiX9uzmL0UdXfUwyoNOaYn69m48JBRiX4XzEGV7RQUaDx9Gnx86iKsFKSvV2/NGaVvbO/HxdsWWs3rhZFAqLaR6AXY8seUYPjl2zulnOm02NOzfD3u3+rtotcqWfxdKfcx0Ct2oM6S0pcF6gyi39jdbS/DmfudOdIpS1e/Zg972dqefCRaoU+Nb7+/S89VUiAJvJ6Ut0oAwPoOs1jf2ncJvvyxxasL2trZKitvT5N2mR62zdc8xnDyt66Qhya4JFwWeXF66DI24w5aj5/D4R8ec+nLtnZ2o37tXSmQJVv68cYfer0xaQYY7/hDs7K2ox0ObitDYrmzD0qKs4cABKfvKV9Ajurm1w+/RqJ0HiyFa9Zlr4ICkpwPZJAWh0vjueHWLlN74zI25GJeiUHWmrw9NhYXo7eiQcgNUO2+ZDa/+Mx/bDxRLC6HIiAjMz8vG3WuW4rK56p3HGa/8/Uufn8MPkJ72t843mS2podJ9nGju7MHW4low45IxOkG5fkB3XZ1kMsRkZIxcm8gFPswX8YOfv43iinPokXcIU1TqjK1B8pl2dfdg8ZzJPrjSfmiW/dN72312fD9B/st1Nmt+34B5oPsrchcyER4WirC7zPkeqfbTp9F48KBXvlzK4X3ixU3S1hZnkEJt/OyAz641SGbZXeQ5wIBNKwp8JTltAy6Wn6FFGfexFR8ecR7Jpp0GDfv2wd7lmW/zxbc+d8l+ffFN1z7nLkFiy8JxYnVMN9L90tIT6DH9Qn4p/iE633rS3djY78ttc6+AHW1t31/gWuyGcgG+KipX+/KCZZaFo346Ku3WwMiiDV7bcRKHO2Oc2q+ksO76cvcXlZ2vI+YKewvUfdgF0SxLhSz2DvzgqLQfB0Ye7fD0+r2Im8VI+7aUIBNB8uVWO9/m48j+Qvci5HtEdYOTQTTLfikK/PmQ5XmlFQWeAgyHAyaWBqDH+bu7izHq0ksRHqPcqkjy5R48KC3SLsY+F02DAWj7i1p5AUE0yxJbHH8YmkK/BSHOXzftRHd0LEYtWoSIBCdNNChAUFSE1mLnJTLpD6DklGsz8gC0EDt4tEKVGxBEsyzxkeMPQ5V2s39l0R6kbO98tBcRcXGS4kalOm8A3VpSIgUilJIayJ7t8yBfd5+bJoUSQTbLWkWBHzQ7DFXanQBO+Vcm7UGzLT2mw6OikLpw4YjbvCnkS6Hfob5cd+1Zb7/nSJDNsu8O/cUgpRUFvk/pQ6HGwGwLuZhGypw5iMt23rGbkmxogeboy3XXnh3AW7s2yGZZ4p2hv1DaFhrySguH2VYiLAxJublInO68ri25wup375bSHGvqm922Zwcgu3a/F/7aIJtlC0WBPzL0l0pKuwdAiX9k0i6Os+0A8Tk5SGYY577c9nZpxt25/ZBH9uwAW7YVePS9IJxl31b65TCllU2EV/0iksZ5ff121A/pzhibmYnUBQsQFqlcBo1MhPkRLVLLVE+hPVwlFc63CSme127H83/9NJiGn2oB/FnpDWdVI96QvxTStLR1YN2v3xuW7BKdnj6iL5fq4T61cgZW57lfpwuyifDfv14vlS5ylede/0RKfwwiPhQFXjG2rhj6sVnzW0xmy1wAuaGuuGds9Sg8cRZL509FbMyFVlGksDFjx6K7tlYxmYYsiEUTR0mtTw+dcb84SH1jK7Z/VYzFcycjZYTGzZTW+OxrW/D3IaZMEPATmzVfsQyO01ruJrOFtuF8K9hGwhNOVdVh02cH0d3Ti7Gjk5EsK1F4ZCQaohPQUGlDXJiyDUtF8MYmx2JPeb3b5YyoiceGTw9IOx0y0pKQ5tAxnMyWzVtFPPb8Buw8FHRLEErCeJByZ5XeHDG7mWE5KsUy12ei6RRqgkwvamfU1NIuzaZUuebKKc6bX351uhH/84lVKlPqKXGx0RiVHI+Ozm49V4hxhQdEgX/Z2edG7JphMluoX8+aQEitZeiRTLNfZ1e/2U+ZXP8uqUVCTCRyTUmKko9LjsWl2anYWVaP9m7PFJd2PdB52zuDuk4DZeV/y2bNd3qRF1PaYwDuokbhPhEvyNh/qgFt3b1YOEE59JsWHy3NxvQ5Z4XyDPC8KPAjZhyOqLQ2a77dZLaQxt9gjKVrHLW1SL0hyOUVruDPpcrky6eNRlFVM845aWAdwpDNc6fNmj9itr0rhVJfNfIR3CO/pBaPfHBEapmqBCnus6tnYspoJ1lkocvLosBftPDERZVWFHiaDn4Z6qPpLgVnm/CjjYVSk2olaENlqZMuPSEK+QV/5cqlu1qS+jUjtOs+ZXVt+OHGApTWDn7aFVQ24VefF6vWxC5IIFvWpU58LvXclG1bCmrfEeoj6y7k4tp6ogZmU6Lkry2vb8e6D46iw0MPQpBCu2a+NpLHwBGXG8XarPlHTWbLVQAmhfoIu0t3b5+kuGTLvrTtpFQ/12AQ3xMF/itXh8TdjhUPyt1wDNyEWkj97/aTTtukhjCUVfg3dy7frZbcNmu+zWS2UBbIJaE+0gaqQBPgLaLAu1Xxz5PeQI9SHolxzwxU4EVR4Pe5exi3lVYUeKpW8T3jjhl4Ce1HetyTQ7hlHgxgs+ZbTWbLTAB5xp0z8JA7RYH3qJmZN+1FabatNO6YgQe8Igr8J54OnMdKK5e9/7ZxxwzchJKwHvZm0DwyDwawWfNLTWYL5eItMe6cgQtQTPt6UeC9ymVRo/v4zygrz7hjBi7wiCjwXvd49bJhZT8My1EveiplPVqN4xkEJW+LAr9WjQtTY6aFPN3fYUTLDJxAhRzuVWtwvLJpHbFZ80+azBbKtbtWrWMaBAV1AK4RBV61/e2qKS36FXeXyWzJBLBQzeMa6JaBhdchNS9AFfNgCN83qoobyPynKPCqd05SXWlFgadE0dsBqPrXZaA7HhUFfljFQzXwxUxLitss27bDKt4ZhATPigLv0tYZT1DF5eUMhuWyqMkDAN/30TTQChSi9WlClU9m2gFEgactOiuMVMaQ4XV5TeNTfKq06FdcSkFbbGyMDHr+AOAeuVSsT/G50uLCjHslVXYO2Vsa3Dwr7/PyywZjn9q0Q2FYLoPqjhrbdYKKJ0SBf9qfF+RXpUW/4sbLG9lu8ve5DVSFthR/RxT4N/09rKpGxFyB9rabzJb1clG7xf4+v4EqUFGNVaLAvx+I4fT7TOsIw3L3AXgJQJTr3zIIMLRFZo0o8McCJUZAlRb9irsIwHsAxgdaFoOLQvfpLjl4FDD84j0YCVHgqVjDglBv3a9xKDT/CIDbAq2w0MJMOwDDcmRfrwPAA1Dud2QQCKif/1pR4HdrZfQ1o7QDMCx3iexdmKYNiUKav1ApLC3Mro5oTmnRr7iJAH5BDSO0KmOQUyUHCzZq8TI1rRAMyy2Wa+MaRUH8xx/lDYgu1YoNBJqfxRiWi5JtXaohFq8BkYKVQrkVkuY7Quvm0cuwHLnEngHwTQ2IE0zUyTW1/igKvC5a7ujOXpRNBkowXqYBcfRMB+W+Avi5KPD1eroO3S5yGJZbKbvHFmlAHD1BOQN/orETBV6Xtdh0vzJnWO56ucrN5RoQR8t0yK3ofyUKfIWeLyRo3ElyOPhhuS1qwCN9GqJazu94xZUeXXog6HygDMvlAPgvuT1qpgZEChTb5caF60WBbw+mCwtaxz3DchQKXgXgbioYESKZZGSjviN7AgKWheVrQiLaxLBcGoCbKeEDwPIgy22gx/8GAP+gDqeiwAd9PbWQC5HKCkyeh+vkf00aEMtdqFzmR3Iln11ygZSQIaTj+gzL0fXPA3CF7H1YqkE7mGZOEcBO2U7dKgp8lQbkChhGMsoQ5IXcfPqvwyvHT2NFC6YiWUmpPOZhKlittSyrQGMorQswLBctt1cdeE2UC0inA8iQ/58gj2fKkCOSM79VnjEpZFrr8KKesOVye6KTenX2+xUA/w8hAmHLqewYRwAAAABJRU5ErkJggg=="
        }
      ></image>
    </svg>
  );
}

export default Aestetic4SvgIcon;
/* prettier-ignore-end */
