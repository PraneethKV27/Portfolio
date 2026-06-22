import React from 'react';

export default function Showcase() {
  const components = [
    {
      name: 'Arduino UNO',
      category: 'Microcontroller',
      desc: 'An open-source microcontroller board based on the Microchip ATmega328P. Used as the brain of many ECE prototyping systems.',
      pins: '14 Digital I/O, 6 Analog Input',
      voltage: '5V Operating Voltage',
      icon: '⚡'
    },
    {
      name: 'ESP32',
      category: 'IoT SoC',
      desc: 'Low-cost, low-power system on a chip with integrated Wi-Fi and dual-mode Bluetooth. Essential for advanced IoT networking.',
      pins: '36 GPIOs, 12-bit ADC, capacitive touch',
      voltage: '3.3V Operating Voltage',
      icon: '📶'
    },
    {
      name: 'Raspberry Pi 4',
      category: 'Single Board Computer',
      desc: 'A tiny, powerful credit-card sized computer running Linux. Perfect for robotics control, AI inferencing, and server stacks.',
      pins: '40-pin GPIO header, dual micro-HDMI',
      voltage: '5V DC via USB-C',
      icon: '🍓'
    },
    {
      name: 'OLED Display (SSD1306)',
      category: 'Display module',
      desc: '128x64 pixels organic light emitting diode screen using I2C/SPI bus interface. Provides high contrast diagnostic feedback.',
      pins: '4 pins: VCC, GND, SCL, SDA',
      voltage: '3.3V - 5V',
      icon: '📺'
    },
    {
      name: 'Fingerprint Sensor',
      category: 'Biometric Module',
      desc: 'Optical fingerprint scanner with onboard DSP processor for fingerprint enrollment, storage, and matching algorithms.',
      pins: 'UART serial protocol pins',
      voltage: '3.6V - 6V',
      icon: '👆'
    },
    {
      name: 'Servo Motor (SG90)',
      category: 'Actuator',
      desc: 'Tiny, lightweight 180-degree rotation actuator. Used in precision robotics steering, mechanical arms, and triggers.',
      pins: '3 pins: PWM Signal, VCC, GND',
      voltage: '4.8V - 6.0V',
      icon: '⚙️'
    }
  ];

  return (
    <section id="showcase" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-cyber text-glow-cyan text-cyan-400 font-extrabold uppercase tracking-widest">
          Electronics Showcase
        </h2>
        <div className="h-0.5 w-32 bg-cyan-500 mx-auto mt-3 rounded-full opacity-60"></div>
        <p className="text-gray-400 mt-4 font-tech text-lg max-w-xl mx-auto">
          Explore interactive ECE hardware and modular components used in our prototyping environments. Hover to view datasheets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {components.map((c, i) => (
          <div 
            key={i} 
            className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-400 transition-all duration-300 shadow-lg cursor-pointer"
          >
            {/* Cyber Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-40 group-hover:opacity-100 transition-all"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-40 group-hover:opacity-100 transition-all"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-40 group-hover:opacity-100 transition-all"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-40 group-hover:opacity-100 transition-all"></div>

            {/* Glowing Tech Orb background */}
            <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/25 transition-all"></div>

            {/* Header info */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{c.icon}</span>
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">{c.category}</span>
                <h3 className="text-xl font-bold font-cyber text-gray-100 tracking-wider group-hover:text-cyan-400 transition-colors">
                  {c.name}
                </h3>
              </div>
            </div>

            {/* Component description */}
            <p className="text-sm font-tech text-gray-400 mb-6 leading-relaxed">
              {c.desc}
            </p>

            {/* Schematic-like Specification Panel showing on hover */}
            <div className="border-t border-cyan-500/15 pt-4 group-hover:border-cyan-400/30 transition-all">
              <div className="flex justify-between items-center text-xs font-mono text-cyan-300">
                <span>⚡ OPERATING V.</span>
                <span className="font-semibold">{c.voltage}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-purple-300 mt-2">
                <span>🔌 IO INTERFACE</span>
                <span className="font-semibold text-right">{c.pins}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
