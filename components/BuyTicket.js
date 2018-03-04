import React, { PureComponent } from 'react';
import styled from 'styled-components';

const BuyTicketLink = styled.a`
  fill: #02f694;
  cursor: pointer;

  &:hover {
    .overlay {
      fill-opacity: 0.2;
    }
  }

  &:active {
    .overlay {
      fill-opacity: 1;
    }

    .dash,
    .text {
      fill: #321f6e;
    }
  }

  .text {
    font-size: 24px;
    font-weight: bolder;
    letter-spacing: 1px;
    alignment-baseline: middle;
  }
`;

class BuyTicket extends PureComponent {
  render() {
    return (
      <BuyTicketLink aria-label="Buy Ticket">
        <svg width="170" height="52" viewBox="0 0 203 63" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 41.8936667V56.5C3 58.4329966 4.56700338 60 6.5 60h190c1.932997 0 3.5-1.5670034 3.5-3.5v-50c0-1.93299662-1.567003-3.5-3.5-3.5H6.5C4.56700338 3 3 4.56700338 3 6.5v14.6063333c5.08844121.7278445 9 5.1039588 9 10.3936667 0 5.2897079-3.91155879 9.6658222-9 10.3936667zM1.5 39C5.64213562 39 9 35.6421356 9 31.5S5.64213562 24 1.5 24C.67157287 24 0 23.3284271 0 22.5v-16C0 2.91014913 2.91014913 0 6.5 0h190c3.589851 0 6.5 2.91014913 6.5 6.5v50c0 3.5898509-2.910149 6.5-6.5 6.5H6.5C2.91014913 63 0 60.0898509 0 56.5v-16c0-.8284271.67157287-1.5 1.5-1.5zM30 .5c.8284271 0 1.5.67157288 1.5 1.5v4c0 .82842712-.6715729 1.5-1.5 1.5s-1.5-.67157288-1.5-1.5V2c0-.82842712.6715729-1.5 1.5-1.5zm0 11c.8284271 0 1.5.6715729 1.5 1.5v4c0 .8284271-.6715729 1.5-1.5 1.5s-1.5-.6715729-1.5-1.5v-4c0-.8284271.6715729-1.5 1.5-1.5zm0 11c.8284271 0 1.5.6715729 1.5 1.5v4c0 .8284271-.6715729 1.5-1.5 1.5s-1.5-.6715729-1.5-1.5v-4c0-.8284271.6715729-1.5 1.5-1.5zm0 11c.8284271 0 1.5.6715729 1.5 1.5v4c0 .8284271-.6715729 1.5-1.5 1.5s-1.5-.6715729-1.5-1.5v-4c0-.8284271.6715729-1.5 1.5-1.5zm0 11c.8284271 0 1.5.6715729 1.5 1.5v4c0 .8284271-.6715729 1.5-1.5 1.5s-1.5-.6715729-1.5-1.5v-4c0-.8284271.6715729-1.5 1.5-1.5zm0 11c.8284271 0 1.5.6715729 1.5 1.5v4c0 .8284271-.6715729 1.5-1.5 1.5s-1.5-.6715729-1.5-1.5v-4c0-.8284271.6715729-1.5 1.5-1.5zm38.38-25.26c-.0960005.0480002-.1040004.0959998-.024.144 1.6800084.7520038 2.52 2.0879904 2.52 4.008 0 1.4720074-.4879951 2.607996-1.464 3.408-.9760049.800004-2.2479922 1.2-3.816 1.2H59.74c-.1120006 0-.1999997-.0319997-.264-.096-.0640003-.0640003-.096-.1519994-.096-.264V22.56c0-.1120006.0319997-.1999997.096-.264.0640003-.0640003.1519994-.096.264-.096h5.664c1.6640083 0 2.9559954.3799962 3.876 1.14.9200046.7600038 1.38 1.8679927 1.38 3.324 0 1.7120086-.7599924 2.9039966-2.28 3.576zm-6.576-6.048c-.0800004 0-.12.0399996-.12.12v5.016c0 .0800004.0399996.12.12.12h3.6c.9280046 0 1.6599973-.2319977 2.196-.696.5360027-.4640023.804-1.095996.804-1.896 0-.8160041-.2679973-1.4639976-.804-1.944-.5360027-.4800024-1.2679954-.72-2.196-.72h-3.6zm3.792 12.792c.9120046 0 1.6359973-.2519975 2.172-.756s.804-1.1879957.804-2.052-.2719973-1.5479975-.816-2.052c-.5440027-.5040025-1.2879953-.756-2.232-.756h-3.72c-.0800004 0-.12.0399996-.12.12v5.376c0 .0800004.0399996.12.12.12h3.792zm15.98-9.84c0-.1120006.0319997-.1999997.096-.264.0640003-.0640003.1519994-.096.264-.096h1.56c.1120006 0 .1999997.0319997.264.096.0640003.0640003.096.1519994.096.264V38.64c0 .1120006-.0319997.1999997-.096.264-.0640003.0640003-.1519994.096-.264.096h-1.56c-.1120006 0-.1999997-.0319997-.264-.096-.0640003-.0640003-.096-.1519994-.096-.264v-.72c0-.0480002-.0159998-.076-.048-.084-.0320002-.008-.0639998.0039998-.096.036-.6400032.8640043-1.6159934 1.296-2.928 1.296-.7840039 0-1.5079967-.1519985-2.172-.456-.6640033-.3040015-1.195998-.751997-1.596-1.344-.400002-.592003-.6-1.3119958-.6-2.16v-8.064c0-.1120006.0319997-.1999997.096-.264.0640003-.0640003.1519994-.096.264-.096h1.56c.1120006 0 .1999997.0319997.264.096.0640003.0640003.096.1519994.096.264v7.344c0 .8320042.2199978 1.4879976.66 1.968.4400022.4800024 1.059996.72 1.86.72.800004 0 1.4399976-.2439976 1.92-.732.4800024-.4880024.72-1.1399959.72-1.956v-7.344zm5.78 16.656c-.0480002 0-.0879998-.0319997-.12-.096-.0320002-.0640003-.048-.1519994-.048-.264v-1.224c0-.2400012.0479995-.36.144-.36h.144c.6400032 0 1.1399982-.0719993 1.5-.216.3600018-.1440007.6639988-.411998.912-.804.2480012-.392002.4839989-.9799961.708-1.764.0160001-.0320002.0160001-.0799997 0-.144l-3.96-11.736c-.0160001-.0320002-.024-.0799997-.024-.144 0-.1760009.103999-.264.312-.264h1.68c.208001 0 .3439997.095999.408.288l2.712 8.64c.0160001.0640003.0399998.096.072.096.0320002 0 .0559999-.0319997.072-.096l2.616-8.616c.0160001-.0960005.0639996-.1719997.144-.228.0800004-.0560003.1679995-.084.264-.084h1.68c.1280006 0 .2159998.0359996.264.108.0480002.0720004.0560002.1719994.024.3L92.564 39.84c-.3680018 1.1040055-.7359982 1.9279973-1.104 2.472-.3680018.5440027-.847997.9279989-1.44 1.152-.592003.2240011-1.4239946.336-2.496.336h-.168zm28.432-21.6c.112001 0 .2.0319997.264.096.064.0640003.096.1519994.096.264v1.296c0 .1120006-.032.1999997-.096.264-.064.0640003-.151999.096-.264.096h-4.464c-.08 0-.12.0399996-.12.12V38.64c0 .1120006-.032.1999997-.096.264-.064.0640003-.151999.096-.264.096h-1.584c-.112001 0-.2-.0319997-.264-.096-.064-.0640003-.096-.1519994-.096-.264V24.336c0-.0800004-.04-.12-.12-.12h-4.248c-.112001 0-.2-.0319997-.264-.096-.064-.0640003-.096-.1519994-.096-.264V22.56c0-.1120006.032-.1999997.096-.264.064-.0640003.151999-.096.264-.096h11.256zm4.508 2.76c-.464002 0-.843999-.1399986-1.14-.42-.296001-.2800014-.444-.6439978-.444-1.092 0-.4480022.147999-.8119986.444-1.092.296001-.2800014.675998-.42 1.14-.42.464002 0 .839999.1399986 1.128.42.288001.2800014.432.6439978.432 1.092 0 .4480022-.143999.8119986-.432 1.092-.288001.2800014-.663998.42-1.128.42zM119.504 39c-.112001 0-.2-.0319997-.264-.096-.064-.0640003-.096-.1519994-.096-.264V27.144c0-.1120006.032-.1999997.096-.264.064-.0640003.151999-.096.264-.096h1.584c.112001 0 .2.0319997.264.096.064.0640003.096.1519994.096.264V38.64c0 .1120006-.032.1999997-.096.264-.064.0640003-.151999.096-.264.096h-1.584zm10.868.192c-1.216006 0-2.255996-.3079969-3.12-.924s-1.455998-1.4519947-1.776-2.508c-.240001-.7360037-.36-1.703994-.36-2.904 0-1.1040055.119999-2.0719958.36-2.904.320002-1.0240051.915996-1.839997 1.788-2.448.872004-.608003 1.907994-.912 3.108-.912 1.200006 0 2.247996.303997 3.144.912.896004.608003 1.479999 1.3759954 1.752 2.304.08.208001.136.4319988.168.672v.048c0 .192001-.103999.3039998-.312.336l-1.56.216h-.072c-.176001 0-.288-.0879991-.336-.264l-.072-.312c-.128001-.5440027-.439998-.9999982-.936-1.368-.496002-.3680018-1.095996-.552-1.8-.552-.688003 0-1.271998.1839982-1.752.552-.480002.3680018-.791999.855997-.936 1.464-.144001.5760029-.216 1.3359953-.216 2.28 0 .9280046.071999 1.6799971.216 2.256.160001.6400032.475998 1.1439982.948 1.512.472002.3680018 1.051997.552 1.74.552.688003 0 1.279998-.1799982 1.776-.54.496002-.3600018.815999-.8199972.96-1.38l.024-.096v-.024c.016-.0800004.064-.1559996.144-.228.08-.0720004.168-.1000001.264-.084l1.56.264c.224001.0480002.328.175999.312.384-.016.0640003-.056.2159988-.12.456-.272001.9760049-.855996 1.759997-1.752 2.352-.896004.592003-1.943994.888-3.144.888zM138.96 39c-.112001 0-.2-.0319997-.264-.096-.064-.0640003-.096-.1519994-.096-.264V22.56c0-.1120006.032-.1999997.096-.264.064-.0640003.151999-.096.264-.096h1.584c.112001 0 .2.0319997.264.096.064.0640003.096.1519994.096.264v9.072c0 .0480002.016.0799999.048.096.032.0160001.064 2e-7.096-.048l4.368-4.704c.112001-.1280006.255999-.192.432-.192h1.848c.192001 0 .288.0639994.288.192 0 .0800004-.032.1599996-.096.24l-2.952 3.432c-.048.0480002-.056.1039997-.024.168l3.576 7.752.048.192c0 .1600008-.103999.24-.312.24h-1.68c-.208001 0-.344-.0879991-.408-.264l-2.784-6.432c-.016-.0320002-.044-.052-.084-.06-.04-.008-.068.0039998-.084.036l-2.232 2.448c-.032.0640003-.048.1199998-.048.168v3.744c0 .1120006-.032.1999997-.096.264-.064.0640003-.151999.096-.264.096h-1.584zm16.868-1.776c1.296006-.0160001 2.223997-.519995 2.784-1.512.08-.1440007.168-.216.264-.216.08 0 .152.0239998.216.072l.984.6c.128001.0800004.192.1839994.192.312l-.048.192c-.432002.7840039-1.043996 1.3999978-1.836 1.848-.792004.4480022-1.715995.672-2.772.672-1.136006 0-2.095996-.2519975-2.88-.756-.784004-.5040025-1.375998-1.2279953-1.776-2.172-.400002-.9760049-.6-2.1199934-.6-3.432 0-1.1680058.087999-2.055997.264-2.664.288001-1.1040055.863996-1.9759968 1.728-2.616s1.911994-.96 3.144-.96c1.520008 0 2.679996.395996 3.48 1.188.800004.792004 1.319999 1.9399925 1.56 3.444.08.592003.136 1.3119958.168 2.16 0 .2400012-.119999.36-.36.36h-7.584c-.08 0-.12.0399996-.12.12.032.608003.088 1.0399987.168 1.296.176001.6400032.527997 1.1439982 1.056 1.512.528003.3680018 1.183996.552 1.968.552zm-.336-8.64c-.704004 0-1.275998.1679983-1.716.504s-.739999.799997-.9 1.392c-.112001.3520018-.184.7999973-.216 1.344 0 .0800004.04.12.12.12h5.448c.08 0 .12-.0399996.12-.12-.032-.5280026-.08-.9199987-.144-1.176-.160001-.6240031-.475998-1.1239981-.948-1.5-.472002-.3760019-1.059996-.564-1.764-.564zm14.444-.264c0 .1120006-.032.1999997-.096.264-.064.0640003-.151999.096-.264.096h-2.448c-.08 0-.12.0399996-.12.12v6.264c0 .6880034.147999 1.1759986.444 1.464.296001.2880014.771997.432 1.428.432h.576c.112001 0 .2.0319997.264.096.064.0640003.096.1519994.096.264v1.248c0 .2240011-.119999.3519998-.36.384l-.984.024c-1.232006 0-2.151997-.2159978-2.76-.648-.608003-.4320022-.912-1.2399941-.912-2.424V28.8c0-.0800004-.04-.12-.12-.12h-1.32c-.112001 0-.2-.0319997-.264-.096-.064-.0640003-.096-.1519994-.096-.264v-1.176c0-.1120006.032-.1999997.096-.264.064-.0640003.151999-.096.264-.096h1.32c.08 0 .12-.0399996.12-.12v-2.688c0-.1120006.032-.1999997.096-.264.064-.0640003.151999-.096.264-.096h1.488c.112001 0 .2.0319997.264.096.064.0640003.096.1519994.096.264v2.688c0 .0800004.04.12.12.12h2.448c.112001 0 .2.0319997.264.096.064.0640003.096.1519994.096.264v1.176z"
            fill="#02F694"
          />
        </svg>
      </BuyTicketLink>
    );
  }
}

export default BuyTicket;
