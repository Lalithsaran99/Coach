import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import app from './base';
import { Form, Input, Button, Row, Col, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 14
  }
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const Demo = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    fileRef.put(file).then(() => {
      console.log("Uploaded a file")
    })
  }

  return (
    <>
      <Form form={form} {...layout} onFinish={onFinish} autoComplete="on">
        <Row gutter={[16, 24]}>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              name="user"
              label="User"
              rules={[{ required: true, message: 'Enter User Id' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              name="qualification"
              label="Qualification"
              rules={[{ required: true, message: 'Enter Qualification' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="Address_set">
              <Form.List name="address_set">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(field => (
                      <>
                        <Form.Item>
                          <Row gutter={[16, 24]}>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'line1']}
                                rules={[
                                  { required: true, message: 'Missing Line1' }
                                ]}
                              >
                                <Input placeholder="line1" />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'line2']}
                                rules={[
                                  { required: true, message: 'Missing Line2' }
                                ]}
                              >
                                <Input placeholder="line2" />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'city']}
                                rules={[
                                  { required: true, message: 'Missing City' }
                                ]}
                              >
                                <Input placeholder="city" />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'state']}
                                rules={[
                                  { required: true, message: 'Missing State' }
                                ]}
                              >
                                <Input placeholder="state" />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'country']}
                                rules={[
                                  { required: true, message: 'Missing country' }
                                ]}
                              >
                                <Input placeholder="country" />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'zip']}
                                rules={[
                                  { required: true, message: 'Missing Zip' }
                                ]}
                              >
                                <Input placeholder="zip" />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form.Item>
                        <MinusCircleOutlined
                          onClick={() => remove(field.name)}
                        />
                      </>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add Address
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              name="coach_blog"
              label="Coach_blog"
              rules={[{ required: true, message: 'Enter Coach_blog' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              name="coach_desc"
              label="Coach_desc"
              rules={[{ required: true, message: 'Enter Coach_desc' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item label="File upload">
              <Upload>
              <Button icon={<UploadOutlined />} onChange={onChange}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item {...tailLayout}>
              <Button type="primary" {...tailLayout} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Demo;
