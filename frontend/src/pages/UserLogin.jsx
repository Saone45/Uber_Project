import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({
        email:email,
        password:password
    })
    setemail("");
    setpassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <img className="w-16 mb-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX0AAACECAMAAABLTQsGAAAAkFBMVEUBAgL////m5ubl5eUAAADk5OTv7+/8/Pzr6+vz8/P29vbt7e35+fny8vIcHR0ZGhqKiopZWlqfn5/GxsZxcXHPz89mZmaZmZmnp6evr6+6urp4eXnb29vLy8s5OTk/Pz+BgYFSUlIpKSktLS0QEBBJSkphYWG1tbWSkpIxMTEiIiK/v786OjqHh4d0dHRTVFSX+rgWAAAXQElEQVR4nO1d60LrLLNuCCEnora1B2u0Wq3W1sP9393mkLQkDASSuvTdn/xZuICBPIVhGGaG0UKkK5F2Ir875AihJBAJ8RRSkS9Cns9lQcQLoljkiSgoRJ5G+c3H1VWL7CQOMl6pIoseRIGstOPZj5UoiCVZ2UWukhWtkTqoTORVssCgiIlsaiIrvzX1JpugE9nMSvYE4QjraUIGoV9cAzRpA6aZXuHjfxJ9PZ0BfY3kpYZ+u8bVH/p/6P+h/z+Ofh5FUdU0EqlCX+RztaD6HpEvqhGB6LNdV1TqQN9Ilop8WH2P+KNCXyFbta5gEvkaJoVsIvKpQhapZCuYzkc21MgeIYTQvwniOKYJTygWiYg/UpHPRD6RBTKfiXwq8nkcPOjoX5CkEJUE2Xyq17gqrGSJLEDiD6oMSiFbt8610eY62UIlm7iTzUxkqUa20RqEEEJ/qa2qxmLlBWE9XXhBpK4qNl1uIfQbixVCny9pM9kOftfkAaJ1vTSU0Qp+EBnZaKCRFd+KQhPZBmNSyXbxu3pQPdA3ceAjqwTnvjqiBETfjVW6oG/aFjo2MQD9UEXfRDbUyLruNhD6NwPR75z7f+hb0B869//QP8PcD1k6Sh88XzMtXnBk0Lyg3s953sR5jmICbwyhn1vJ1jApgyKioDiRDY/SB8/XDJrna76vkC1MZHOFLFULkEY2UVvHClliIqtCGMLoTzLCUiYSIad8KvKFXlA0Cigw9y/r1qIFBSVOA9lU6bsxKGMBNKh+ZDu/dSBZEH1ymoXadAmhWRiq08Uo7/NanfK+Ol3C9iys5f2wNQtDYBaKpREqK65J1mUhg2TD0+RurjiFbGYne4QQRt+ZVf6ddf80DX/o/6F/NvR9+X5DTPhNfB9i0AP5vonsufj+MitYylKWRK4oUv5Hlso/1LwsaFaKDTLPqTUo88QdZIvOQTULCmC07q19yHq0VgtYHkRfny6/S97vmoVtwdy4kL3k/cRlxQ2X9/80Df8pTUNro/pD/yf1PH86zm/UcRr1+7XO+6f0+ycGjQz6fYWsEf2GnCtad+r3w9OgVPQBsk76fcpSdWMjUnUxI/L1tQ7P1/c9oqC6hKLg3C+SQpISde4AmSftIEvhQRXKoBLZ2jjaRCFbeJMFBuVNtjUoCP0J259Pl5KeYoLlXjc8qgUd5f229HG6121JH5C2sUMkUqSP070uIMANJxtqZP/0PL/4rPuH/h/6/8Poq039zAC+B/3Ihn74Peh7kU0Usjr6sAD3n5z7RslbGoCcD/28g2z4DXP/RpZZ7bQaVmUt8y+7nocbeYF6Hqv5V8OqTOY7rMpUU7f+hnlKgZMFXaEMCiDbgtCI/q/S8zD5Wyn45rOuqKV+6y/XNLQ2qvNqGmISldOb5WSymEyWh1mJsmpmnRN99kfOyKZ5Us7uWJpFuWiP+PH47OjHqGr9i+c+n+Jk+jB+a7pZjLbz5Sw7L/ooS8vDx3x7qfRzsX3ZTcuYJl7oy2NsWrVgqQmhaE3KO5Fms++Y++dAP0QkLRebCnC1okzjZUjJudDPXufPuNVV/SNcv6LCGf3XSTstyelGjX/S8navziQT+j+766Ks3D0ZxldDs11EWTJ816WruQmJqqPxip6+1brrPgIuUzX6iJa7TasQ6nFSiN+V2zrL6YIo/yMoRJ4E0pZbJJGtNqpCVKIo/YQlzorZ8UqgxMkLao4YfRqRV4GZz1h/POXW0QaN0eYin4qCIHq47OqJlT/fsh86Dk7fSqpvleu1JkvH2mdtqhWHguS685Mk+kTR9YoVfbbTVtetOuMgIUrvxk4D5bhspxk75vQ9bZXdP3Ld0bwM7GSTMDSiHybFzq2nnz5tZdHcbZwVLI93tCf6qdtsrDuaEzv6yIh+mN29ufb0o+ij1HWSnHAZl4U3+mw5X/l1xGrv4l7oh9mNx3z6QfQD90mi4jKJPdEPs+m9d0cYv5V90OcTyr2TCYn6G10Pu13xGacKyzpRBtV9DYLSq54d7WJkJBtlIPrph09feMkvzLJcpOpaTOSrazGRJ2pBddtWFYDyfpEXp9bgzWKWp8m4Fya8OX6NwdGm6mjzarRBsu/ZEf+dYxNZGujoX8TBxI/BAdZUXsZ39tOW0ZqKlKOe2PP2+DpWpA+7NdW0748sOoqOZLWLRwD9YOW5jQ3VNPTT81DPYbYJ4C3pUkDL0QYeeyDY0dR41tXR3xPPzn5Gz7MYhgkncZ+4oJ8tBnaE8cEd/bV+9Oyg/iM6zqeh4HNYwm70s34be7OfQ+yI/shfsBriNWfk+x1WtB3DNKpFmrX2ohMb3087Zr5NBaNUmhI3vu+f8ISmQxJsQa7WyHSJ0/apnZqpU91NkZmGJcdmEUAq+s/Pl5rCU68aAf0U50Hf5j3R5bvZ03vC9JUY7+e3q1nJ0uxutfwcd8DyliKbvG+UdjjVzfXyUIrWaTRbfm4tPeHLvM0fkhCQ9419WXScP3DWNYzyflEq10EJwzKb7UYW/PE8tZx1S7Mi+W2SEEISriEVHCsvimj5btZxPwYuZ12go04N869An836XUQTBOz1M4t6DC9SakA/pBsT+OMyAESIJEAPRvg//NFno36fL1d3s6gsoyiC77Z+A/oYX94UBQphi5I0MqrIML4LYPTD+AVswk4KpfatR3ue/BruCOOZJ/psS5lEaZoniNTYQrV+wltaG+kE8uE5es2hNDGgMsLP2WlQ6gmbwCcKjJe0JgsIcEFQwsIwforbXnM29NlSXtUiWIfXHKDD4NbRoHLjWFArcih0t5WpqpG4A32M5yiAtEuKIofEd5eGWfkZ6INiDRBUnStuaEM/1FRa8dFmnzD8V0FrULEZfYw/0kDTD0EVdT2Pn9F1H6+55kgnFNm85mQ+zeFrGCaNcxN4LUrGHAT/oU0WWnFL+IdD6qCs8j47oGXo93rNqZX3peS6nb4rBukdXxLgrDsDAZwoZGs2qmxitTUVKKniuWxhO+tWNUco/VfWVMPQx0/E1W8rzGDNHJ6kOvpv0Pl6oZK1oA/uVBiXbuhzveg/i03VR89zqrqO3b3mwhSelDjR0L+B6lXgu3jNQR3hsRP64lc6p9ec2Tq6p9fcseY+Bska5NywgOH/yCIFfT6oCwC8OfWIigfw/mryR8fRGtBfmiCEK9tMYBS7nFiqE1EmClKRzw1zXzWBMc99NmuDll1OTVa1IlIsa2JoR+STP2uMFpj6+K3oNk6SMAnTH12QHuHbxmhh9PEXm3RH49wGWaj2d0ZDlWRNEic7wuQwWXM0VKA7IQ02DMzJMzBxc89oqJcADSZc2e51RZ0SRR7RUH/urIuXhcbvujyHULEHJuUFbXjOvgJVFjBZo+dQoN9GC6w6zrqMv4WmTexXoc92sT5+W6A8sspU9L/0Id0byFr8toBj5LroQJ9PffRfQJ8fX3qgH2b6RjPC21hBP9dtKPjtrC/6+mlZsBU7+mNqPrz8KvQXPX0Wic6RR1iKKxL9hT6iRxNZm88iMPl3eQf6N7nn3P+ZXRdjC1mqFrRtuckE+Oorctp1dc0yPihknWOQ6/cD+I1ad122nnWyHTHIg+87bQm9OShxsi03NM3CrhUH7Ifv8sfhlQDQnoQo6hujJNvqrCez36q/pRYIQRR80fc9bYHoY0wsZDvQ18V5fnKo0CdA6YLqZAH0oyb6uS47sf1DAGI4beFrCH37aesb574Z/auiP/qFbgYnlzBHHzCvxFHmhH5r7iOk9YN39rm/yD3n/o/oONlBy7akOtAH1MdSd8xBLp40yNY9oyOlmujKtm8r+ivkif5PxCDn29cQ9A96n/safYDtTyoFRnUcUEFW/XVj9Vs5+vlSI7Whp9EC6N/5ol/5qv/b2xW8IHBUoI4Y5BXZFNh3BfpMcFkBEk8qNVQJj11dEIk+EX/oBUgEuJZ+YHc6E0skCPDtCj5OYA1CUwzydFA4pwz0mouVcE7QzSIuY6dwThSOEgWxnjsiBhXsgC25f9JozY4RsYCbRRzbAm2B6HPNuU8oM7fTlrArMHpPYJ2sHiGtEbatGSFNYwlsDSfytKVzwgHwA3BV/AG8VcfWIHMw+ujfew69VIzJhL7trCt8TIFjaCHR14T0syYm9Ej0wbMu/m9ER3oYiH6hk7zOpEXJcOtoW8K3/w/QXwxEP9bubfGaVugPwLY7VdeLZ0Tf04q2aYTRLwb5tItsw5qqZSLOJS1dEt9QoeeJvxn9twp9WM9jDSoNkeMW5APCdoPyfqqG7U4Br7lZ6ha22xQNnGpmgvgiEK3RN6O/CepBQRJnbAuoDpGbSB6gzsLQx3sCmPvdMchnyErWGIP8qFnVRE5x3GIiUfnd6FObvF8YITTI+zsDB3Y964Lo28+61Q3QgDjMOr9jc19sC9+P/vH6BEA/s8amAi/qh6EPjKHbb2t2fvT3/wb9PT0K9MCXp1b0gYuHR1/0W9dBP4O+gfN8P/oX1rlvR183sJP3zf35vi77uXhLl/58P1T5fgp5Ksuj8Pejb+H7qQ3CEXDbv4+HvKNGAf9gJvOoz7MVgMxzSIe9+gZcO90HonX63egH9aBAmccG4QhQSPJ52D9KRgisdIcoGTs72aa8D8QgzzR7KbzN5L0uZAJ4ziQHZZT3w/ZCVuR94LofT5MBZ10EGe19v6ZBX3H4s9I06JcrF+PteC7S45ilR5nnua/xS1Xw2Cj4evySBS+8zvhLzVfo9znr6rpBqWrojX5y1Qv99UD0geuVSaXj1PdjHFS3rYFkBTJfKHkq8lQvkHwkVv4gA9DXrgu4vpF9Um/0gU3XBX0cD0MfWMO1hvkDuPMIXY+O4lvbez30eGYv9HNI+U0GRMVLoBvzTv0+Ezk1sm76/cqS4h4SoyT6gOp/hVIT2f4xyHvo91PdupcJIHmSC3vq+m5L5Ku7LbWAinx1tyUtsEE3hUsa17dTcERI7v/KSuTdlrTlbpCtX0DRBlXdFmXAaiJytIEuBuDbLHUiKwuQ4Vsbo81ZDQh9G9lR+gigz7dA1XhMj4ZqNP/KIKfY7mioTM7NIksMcsCCTjURhwx6HsXSiKIwAoypzGSHxCC3yfsahFzPU0AmqLj/WTeCAkw5WZRwSau3TYN+f8WdySVjSteAWqmnPY89ErD3WRe48eesp6+ep9CvsN3QZ9xggDUVEIBBbiQCfUDlfetmy/bd6CN9XfKDSl/04UBYbpaEA+Y+oFZ9JjVMCSCN4l52nOdHP9OlBRHsoBf6hS74uaLPXd36WtECbujVhZ+ACTL2+Uj/DfqFFf0ogQBjk9++6xpikBeABDVy2nXF5A+Nu6795Q/Ioe1VwiQGDhj7jEg4eNdtWNkbdt3MuOuyghGDFjSmX6mUne33Qa4/cvSaw9f97PcTwGuUsRZFJIJ2+V3nVAIfVrG99mLQ82hkT/b7AWzvgjeyM5UHdJ91Q5M3nKPn0KyX3xbIO6ttVcJEIZdFBJO1+a4EttNWn7NuAJ0FebOrHugDSgYP9Hnk1tAb/SiDFEu4ivVQHQeANSmuMfzRR+TM6OvKWTH+qTf6Br7jjP4Iz0UtL/QTwJGT71sNj1EoJBg3IfJGP8K7LDkr+gFw4OLwp37o04MliJwj+njJq/nNfchljh1YGiwihfZlxuh80ad7jNcROSv6kMjPWT/12XWJJeTRadftiE3FYCOWXRfwVY817f1IcpXm9gjHGEliVXbp3nUp32Ewfk3PtesK/REUOIi1/CoSVd9lVUxZo30xiVNVTOXmMNQi3JmHvisG1FRcYiON0eYxJJSO8L4K/2BSGVL1W/MklfIJD6l0UhkqrSGJkzZUhi0IR2JdGCIl4q0pRomulIW4r4q+Y4wSud84vuwdIgqDv83C9sveoDiGLzOFbFCRVfid6jWXk1pfhPFlWbRfezGctogNQok+oAmRbe9TvSnIge0xrL2iIzGebWGVKvoJAY3D2frR4/PAIgHeJ1b01bOuqqzjofTczrp2ayrxLwJPXPJDutGP+Lq2ge8ZGUyIFQ7opzMg6A4ncM0w19CnhjPGnSP6ZUMyxPia8RIH9O2aBomfUVjEQu63o5/NNh0m8l7o8ziBYmF3oE8NMZWl46+ukIE3GxGazQH911ZrjPcldUDfrmULqzvLdyP8+1VluARehVoiYypEvGISCkjipMNrLjc8E4LxKmkbnMjRwqHw2W8dFshmx8IKCiD8YR1SzxqTULldgaxoK2Ok1CyysOEdaExBuyYahA+QM1ObxGXDCos6RENdT4PMbMMVE+PDUPg2AIytRIIZFZdhEDdiMNhwsaPKBOwM46+sYdwFec0FNtOwkfxlkig1HlR5N+9LJIKxqLMQJWlqi4isEvCPQY7xeBoTBFpT0dz8KBfeZ4qBecP4IDEf8thWY7RpiCfPplV2kys2DWHo6D2hxKKtmjK5xxZEmI3vaTGLCPuFK7sWkpevn6ATH9S8VxRs/Lws6/5EfCeJfjybm7vlhnhmdZhRMsP8zUZC8qOpBIeJR2ejs1vzD72jil6k91lX3hyEsG7+ND72C8xvr24Oh8Ny9zm+gB0o4cZ9I8Djr91UAsjtFhgTKKcPG0u3TFwtbMpI8ysojOjF9U1ZG00FGaWkXF5fWH7or+AsmobKC94Unb4Bh8Vz1dKwF/p1j5vtB39ZenH18v5s7xjzKDNWVTAchvzU2fP99W7J0uT2cTOydta+fR2CvuCRZjWZVwI0Kj3fnhBt3X9zxr6Lrrfm7M677p1xZzmHtyc6+L7qFgfGtvROwKiFzHNycoNknjP0zMAPiMGprnYBzEwvIPj2tSGZ5kAISZyBzQXwKO+L6ZKdAX48BkwIur3mlgZx0KPjo9d428BcdX9FVPdY6NHXOz8iOLw51CHv17oCnoooHQw/XgdATJBuz6FDAoTV9OoYT47WxOBZN6hfefZ4v9fU1ZYqZIdYlKjohwiOa+wxsHnQD/0VIdshXWM8LSIX9EPxsm7/jnhXH/UL5GdGH5Gy7/ubYlxXWV/0c65p7dszE4bLInRFPxgkXrBD1vmsqRT0RVTvxPTOi9O4ssQBfYjvc+WMzxvMrY6vxdMOFfriDNTS70u+jypFfN57nWF8HwYNc3h+7K8gdEX/qN9PlNg90kS80PR5ruNaR2lCKBD0GF8UVfAkcVsEva+74p1naN2jayalT+UF0zFOUQJGVTp9q++rt0pfuzg+RjlqkQXvtmyhno56HlVMINGX99iYnFnFcwNikzp4zVXWWwWs0LJ3fJuQehaGXfJ+/a0x6vGUMn8cKjWSNd7rmr3mYFYZHDyfHcf4JalWFQF8Rbo9h1bV9xSJRYsDdrwuMy+zpyMPuPNkPxjvXxuGKmc767bQD/N0tXdX4zBmOM1qnjYMfYTo3aNrz5hrohnH74c+233ffL5RPMx1dls2AH0B0+vaTX2M8dchTY4X0UPRD5Ns5oQ/q/Myk0PviT7D/8v1G58mdrKD9Dxt9IWYINSrdrUWK30o+T3sCf2J7lD8rKHfTqvm95Qd2mtB9CpSHlbphT5FWbm76O4KXx8qJ5kOrzktWR+Rsc19ntDr3KRwkv//sqItI4z85vLpabvm6f7t7X5zzzLbuEG2vLx/ur/f8Crb7fuGVbtctb+Hvj5aO54fYm200gDEB32uxC9mu43hI+tvTIoE+lFVq1MGYTHfi09ar5/4972x3N4+903W0Yqx2mwx3qhqvzp7Ob6aFjQJIfMvKcLKPH94DzWMrqs7qlip1LAq4+ZfPNba9OER6ng/nsz42dBsyx1ZDO0Bw7wiLl8/T10p6e2lvmBw8ZqT36p+N20a5rW95tTTlnE/p6ScLnfXj+8Xz3iEn5/W86vlIckEs0NafB4xopaDsWmxHjVPCr9rTBdS3uxut/dVx+/z3eRQ1s9YnlZciwObFrIyC5tGqSEPPpvms5vJ7vaarcf1+PNqsTywOVMQD9+V+iVQVaNoO+v+H4lsgV9ZiTQVAAAAAElFTkSuQmCC"  />
      <div >
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium  mb-2">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            New here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create new Account
            </Link>{" "}
          </p>
        </form>
      </div>

      <div>
        <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
