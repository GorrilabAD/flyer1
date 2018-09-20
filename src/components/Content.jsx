import React, {Component} from 'react';
import pol1 from '../media/img/pol1.png';
import pol2 from '../media/img/pol2.png';
import pol3 from '../media/img/pol3.png';
import arr from '../media/img/arr.png';


class Content extends Component {

  render () {
    return (
      <div className="container_content content_dwn">
        <div className="row justify-center ctn">
          <div className="left">
            <h3 className="left_title">
              We are Best in
            </h3>
            <div className="col_left">
              <div className="polygon ">
                <img className="" src={pol1} alt=""/>
                <p>
                  Lorem Ipsum is simply dummy text of
                   the printing and typesetting industry.
                </p>
              </div>
              <div className="polygon ">
                <img className="" src={pol2} alt=""/>
                <p>
                  Lorem Ipsum is simply dummy text of
                   the printing and typesetting industry.
                </p>
              </div>
              <div className="polygon ">
                <img className="" src={pol3} alt=""/>
                <p>
                  Lorem Ipsum is simply dummy text of
                   the printing and typesetting industry.

                </p>
              </div>

            </div>
          </div>
          <div className="right">
            <h3 className="right_title ">
              What we Offer
            </h3>
            <div className="polygon_right ">
              <img  className=""src={arr} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of
              </p>
            </div>
            <div className="polygon_right ">
              <img  className=""src={arr} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of
              </p>
            </div>
            <div className="polygon_right ">
              <img  className=""src={arr} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of
              </p>
            </div>
            <div className="polygon_right ">
              <img  className=""src={arr} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of
              </p>
            </div>
            <div className="polygon_right ">
              <img  className=""src={arr} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of
              </p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Content;
